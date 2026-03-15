---
title: Mini rack bill of materials (BOM)
category: Mini rack
section: make
tags: electronics raspberry_pi
---

It's been a full year since I started gathering parts to build my [mini rack][mini-rack-category], and I've had it running quietly over the last two months.

```shell
$ uptime
 20:13:53 up 63 days,  3:52,  1 user,  load average: 0.88, 0.83, 0.47
```

![Photo of completed mini rack showing two rows of 2U Raspberry Pi racks, each with 4 Raspberry Pis, a 1U POE switch, and a 1U brush strip with a USB-C cable emerging from within.](/assets/mini-rack/mini-rack-running.jpg)

As I've [written about before][post-adjusting], the mini rack is housed in a flight case that I chose because it was reasonably rugged and fit within a typical Kallax shelf. While the cooling requirements for the Raspberry Pi are very generous, I also wanted to ensure that airflow was managed well within the wood-and-aluminum case. With 6U of vertical space to plan out on the front and on the back of the case, I made a simple layout diagram in a spreadsheet.

![Diagram showing profile plan view of rack; a square divided in to 3 columns left to right: Front, Inside, Back; vertically, there are 6 rows described as "units", counting from top to bottom. In the front, the first and second 2U are denoted "4x Pi", the next 1U is denoted "Network switch", and the bottom 1U is denoted "Brush strip"; In the inside, the first 4U are denoted "Open space", the next 1U shows "Network switch" extends from the front into the inside, and the bottom 1U is denoted "Power strip"; In the back, the first 2U is denoted "Vent panel with fans", the next 3U are denoted "Blank panel", and the bottom 1U is denoted "brush strip"](/assets/mini-rack/mini-rack-diagram.png)

The blank panels and brush strips are being used to help direct airflow. The fans in the back pull air through the front–around the Pi racks–and out the rear.

I assembled a small circuit board to adapt a 2.1mm barrel jack to some headers in order to power two fans. I mounted the fans and the board with some spare hardware and powered it with a simple 12VDC "wall wart" AC adapter.

![Diptych of views of the completed circuit board: top-down showing the barrel jack and three sets of three-pin headers, bottom-up showing a red wire soldered between one row of connections to pins on the three-pin headers and a black wire to a different row of the same headers](/assets/mini-rack/fan-circuit.jpg)

![Photo of assembled panel with two 80mm fans bolted to a 2U hexagonal mesh panel with the circuit board bolted between the two fans. A power cord is plugged in to the circuit board and the fans are running.](/assets/mini-rack/fan-assembled.jpg)

## Bill of Materials (BOM)

- Airflow management
  - [DeskPi RackMate Accessories Blank Panel 10 inch 1U Rack](https://deskpi.com/products/deskpi-accessories-blank-pannel)
    - 3 @ $6.99 (plus $12.67 shipping): $33.64 Total
    - Purchased 2025-03-21
  - [DeskPi Rackmate Accessories 10 inch 2U Rack Venting Blank Panel for T0/T1/T2 Server Rack/Network Cabinet](https://deskpi.com/products/deskpi-rackmate-accessories-2u-venting-blank-panel)
    - 1 @ $12.99 (plus $12.67 shipping): $25.66 Total
    - Purchased 2025-03-21
  - [GeeekPi 10 inch 1U Brush Cable Manager Rack Mount Cable Management Panel with Brush Strip for Cable Entry (2 pack)](https://www.amazon.com/dp/B0DZXDF6CN)
    - 1 @ $29.99
    - Purchased 2025-03-21
- Compute
  - [Raspberry Pi 5](https://www.adafruit.com/product/5813)
    - 1 @ $80.00
    - Purchased 2024-02-21
  - [Raspberry Pi 4](https://www.digikey.com/en/products/detail/raspberry-pi/SC0195-9/12159401)
    - 7 @ $75.00: $525.00 Total
    - Purchased 2023-06-15
- Cooling
  - [Official Raspberry Pi 5 Active Cooler](https://www.adafruit.com/product/5815)
    - 7 @ $5.00: $35.00 Total
    - Purchased 2024-08-03
  - [Arctic F8 Silent 80mm cooling fan](https://www.amazon.com/dp/B08WHMP2CD)
    - 2 @ $7.99: $15.98 Total
    - Purchased 2023-03-22
- Case
  - [Flyht Pro Stage Rack 9,5” 6U Double Door](https://www.thomannmusic.com/flyht_pro_stage_rack_95_6u_double_door.htm)
    - 1 @ $63.00 (plus $82.66 shipping): $145.66 Total
    - Purchased 2025-03-21
  - [HEX STANDOFF M5 STEEL 20MM](https://www.digikey.com/en/products/detail/w%C3%BCrth-elektronik/970200581/6174820)
    - 6 @ $0.67: $4.02 Total
    - Purchased 2025-03-29
- Mounting
  - [DeskPi Rackmate 10 inch 2U Rack Mount with 4 PCIE NVME Boards for Raspberry Pi 5](https://deskpi.com/products/deskpi-rackmate-10-inch-2u-rack-mount-with-pcie-nvme-board-for-raspberry-pi-5-4b)
    - 2 @ $79.99 (plus $12.67 shipping): $172.65 Total
    - Purchased 2025-03-21
  - [HEX STANDOFF M2.5X0.45 STEEL 9MM](https://www.digikey.com/en/products/detail/w%C3%BCrth-elektronik/971090151/6174614)
    - 32 @ $0.57: $18.24 Total
    - Purchased 2025-03-29
- Network (and power)
  - [YuanLey 8 Port Gigabit PoE Switch](https://www.amazon.com/dp/B082D9FWQH)
    - 1 @ $45.98
    - Purchased 2025-03-21
- Power
  - [15Ft Long Surge Protector Power Strip, Addtam Extension Cord](https://www.amazon.com/dp/B0CHM4SFT1)
    - 1 @ $29.99
    - Purchased 2025-03-21
  - [Raspberry Pi PoE+ HAT](https://www.digikey.com/en/products/detail/raspberry-pi/SC1022/14313703)
    - 7 @ $20.00: $140.00 Total
    - Purchased 2024-08-03, 2025-03-29
  - [ADP-45HG BN](https://www.digikey.com/en/products/detail/delta-electronics/ADP-45HG-BN/21724094) USB-C PD power supply
    - 1 @ $22.86 (plus $4.99 shipping): $27.85 Total
    - Purchased 2025-12-29
- Storage
  - [NVMe Base Duo for Raspberry Pi 5](https://www.adafruit.com/product/5969)
    - 1 @ $34.95
    - Purchased 2024-08-03
  - [KIOXIA - SSD OCZ Branded EXCERIA NVMETM GEN 2 2TB M.2 2280](https://www.amazon.com/dp/B09NS16N8X)
    - 2 @ $139.03: $278.06 Total
    - Purchased 2025-03-22

[mini-rack-category]: /Mini%20rack/

[post-adjusting]: {% post_url 2025-04-03-adjusting-the-flyht-pro-stage-rack-case-for-use-with-10-mini-racks %}
