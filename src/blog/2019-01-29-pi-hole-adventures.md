---
path: '/blog/2019/01/29/pi-hole-adventures'
date: '2019-01-29'
title: 'Pi-hole Adventures'
tags:
  [
    'Raspberry Pi',
    'Pi-hole',
    'Linux',
    'Raspbian',
    'Ad blocking',
    'Networking',
    'DNS',
    'VPN',
  ]
---

### What's a Pi-hole?

[Pi-hole](https://pi-hole.net/) is a black hole for internet advertisements and a network wide ad blocker. These simple descriptions don't do this open source project justice and that's the motivation of this post. I'm going to dive into how I'm using a Raspberry Pi Model B+ 512MB Ram running pi-hole to do the following:

- Block ads at the network level
- Be a recursive DNS server
- Expose an OpenVPN server in order to receive the aforementioned features while on the go

### Basic Pi-hole Installation

The first thing I did was ensure my Raspberry Pi Model B+ met the Pi-holes [prerequisites](https://docs.pi-hole.net/main/prerequesites/). I then used [balenaEtcher](https://www.balena.io/etcher/) to flash a fresh image of [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/) onto an 8GB Micro SD. Unfortunately, I forgot to setup [ssh access](https://www.raspberrypi.org/documentation/remote-access/ssh/) before flashing it so I had to do it after the fact. Doing it before saves you from having to attach a display and keyboard to interact with it. Next, I logged in to my pi via the default credentials of `pi` / `raspberry`. I made sure my package repository and my installed packages were up to date by running the following command: `sudo apt-get update -y && sudo apt-get dist-upgrade -y`. Finally, I ran the pi-hole installer command: `curl -sSL https://install.pi-hole.net | bash`.

Before ads can be blocked there's a [post install step](https://docs.pi-hole.net/main/post-install/) that must be taken in order to start blocking ads. The gist is that Pi-hole can't block requests if there's none coming through it. The solution is to instruct the router to send its requests through the Pi-hole. I have an ASUS RT-N66U and followed [these directions](https://discourse.pi-hole.net/t/how-do-i-configure-my-devices-to-use-pi-hole-as-their-dns-server/245) to set my routers LAN DNS to point to the Pi-hole. I may be changing my setup to have the Pi-hole act as the DHCP server as well since it seems like this might be the most effective / authoritative way to ensure clients don't force queries around the Pi-hole.

I found it eye-opening and frankly shocking how many requests were being blocked. The [Pi-hole dashboard](https://github.com/pi-hole/AdminLTE), which can be accessed via http://pi.hole or http://IP-OF-PI-HOLE is easy to use and provides immediate value for those interested in what's happening on the network.

### Recursive DNS

As I mentioned before, I found this whole Pi-hole community and experience addicting. I wanted to learn more about what wass possible in terms of securing my home network and preventing unwanted advertising / tracking from reaching my loved ones and myself. In my research I learned I could have the Pi-hole be a recursive DNS. This was one step closer to becoming more self-reliant and not have to trust as many third party services I know nothing about. I read [this guide](https://docs.pi-hole.net/guides/unbound/) and educated myself on the what and why of setting up the recursive DNS server, but if you're convinced and just want to get it done [go here](https://docs.pi-hole.net/guides/unbound/#setting-up-pi-hole-as-a-recursive-dns-server-solution).

### ASUS, you're breaking my heart

I noticed that some of my requests were not being resolved by my Pi-hole. I did a little tinkering and ended up changing my routers WAN DNS to point to only my Pi-hole. _Disclosure: I barely know what I'm doing_, but I ended up noticing that the router was **making requests every 5 seconds** to `dns.msftncsi.com`. I'm not sure what these requests were, but I found this helpful [discourse thread](https://discourse.pi-hole.net/t/excessive-requests-for-dns-msftncsi-com/556) that shed a bit of light. The solution involves using `telnet` to access your router and use `nvram` to set `dns_probe_content` to `0.0.0.0` and `dns_probe_host` to `""`. Here's a [direct link](https://discourse.pi-hole.net/t/excessive-requests-for-dns-msftncsi-com/556/6) to the solution that worked for me. Now my chattiest client is my Roku, but I've yet to find any solution that doesn't involve unplugging it...

### Pi-hole on the go

Even after a week, I still had a real sense of pleasure from the fact that I was able to use the internet from any device in my home with minimal (if any) advertising and tracking. I realized to my horror that as soon as I wasn't on my network I would lose all of these benefits. I did a little more reading and implemented a solution that uses [OpenVPN](https://openvpn.net/), [Dynu DDNS](https://www.dynu.com/), and [Passepartout](https://passepartoutvpn.app/) to allow my iPhone XS to tunnel back into my home network immediately upon losing my wireless router's connection!

_Security Note: Make sure to secure your network and your Pi-hole device specifically when exposing it to inbound connections from the internet._

I initially tried this with the official OpenVPN client application for iOS, but frankly it was garbage and required a lot of manual intervention to ensure I was connected. Passepartout has a nice feature that allows setting "trusted networks" and will disconnect from the VPN upon connecting to those trusted networks and vice-versa. The [guide I followed](https://docs.pi-hole.net/guides/vpn/overview/) to accomplish this is a great starting point and I won't repeat it as it's very thorough. I will say this was a challenge and required a bit of google + trial and error. This [discourse comment](https://discourse.pi-hole.net/t/see-my-pihole-enabled-openvpn-server/111/3) was particularly helpful when I ran into a snafu.

There are a couple things that aren't covered in the above guide that I needed to do for my setup to work. The first was to use Dynu DDNS to give my Pi-hole a "static domain" that effectively just forwards traffic to the Pi-holes public facing IP address. I used [this guide](https://www.dynu.com/DynamicDNS/IPUpdateClient/RaspberryPi-Dynamic-DNS) to setup a cron job on my Pi-hole that tells my Dynu DDNS domain what the public IP address is dynamically. The second was configuring my router to forward the VPN client port to the internal port the OpenVPN server runs on.

### You're still here?

If you made it this far you probably spend too much time on your computer, but I appreciate you reading the post! Feel free to reach out with any comments / questions about my Pi-hole setup.
