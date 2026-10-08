\newpage
# Hardware Overview

## Server
The heart of the farm information system is a Raspberry Pi, using an SD card for system storage. It's located in the wash room within a waterproof enclosure.

- **Raspberry Pi 4 8GB:** 8GB of ram for caching a robust assortment of data for rapid dissemination and manipulation. By using the Raspian OS it will be able to read data from multiple barcode scanners, scales, and other inputs; maintain an isolated wifi network and DNS service; host database, firewall, and web server systems; and facilitate IoT systems.
- **32GB SanDisk Ultra Micro SD Card:** Simple system storage media that can easily be flashed and replaced at minimal cost. The 'ultra' speeds should keep boot and restart times to a minimum.
- **Waterproof Enclosure:** An IP67 enclose is a necessity in the wet working environment of the wash room. This case has room for modules and expansion.
- **USB-C Power Supply:** Simple power supply for testing and development, or any other time the server isn't running on solar power.

## User Interface
Users will interact with the information system through barcode scanners, scales, tablets, and web browsers.

- **Industrial Bluetooth Scanners:** Industrial barcode scanners which are dustproof, waterproof, battery powered, and communicate over bluetooth. The Raspberry Pi is able to interpret each scanner as a separate input, allowing for multiple simultaneous workflows.
- **Rugged Tablet:** A waterproof wall mounted tablet to display current information, usable with a stylus even with gloves or dirty hands. Includes power supply for recharging.
- **Tablet Wall Mount:** By mounting the tablet on the wall it can be visible to multiple workers at the same time.
- **Waterproof Membrane Keyboard:** Bluetooth wireless waterproof QWERTY keyboard for use with the tablet.
- **RS232 Adapter:** This adapter allows the Raspberry Pi to read the output from the scale, relieving the need to hand-record weights.

## Wireless
Wireless communication is essential for the cordless operation of sensors and input devices with the server, as well as the bridge from the farm hub to the wash station.

- **Wireless Bridge:** The wireless bridge provides a secure end-to-end connection over long distances; it connects an ethernet port at the farm hub to an ethernet port in the wash station, as if they were directly plugged in to one another.
- **Bluetooth 5.1 Antenna:** The Raspberry Pi has a default bluetooth range of about three feet, with this antenna we can extend the range over 100 feet.
- **WiFi AC600 Antenna:** This wireless antenna vastly extends the wifi range of the Raspberry Pi, allowing it to oversee a mesh network connecting sensors and tablets in nearby fields.
- **Antenna Extenders:** These cables allow an antenna to be positioned a short distance away from the receiver. Both the bluetooth and wifi antennas need to be positioned on the outside of the edge server enclosure for maximum effect.

\pagebreak

## Solar
A modest solar panel connected to a charge controller and battery is sufficient to reliably power the information system. Due to the low power consumption of the Raspberry Pi, it is a strong candidate for solar power sources. 

- **100W 12v Solar Panel:** With an average daily yield of 400 watts, a single solar panel is able to provide more than the 288 watts required to power a Raspberry Pi for 24 hours.
- **Solar Panel Extension Cable:** These cables allow the solar panel to be placed at a distance from the battery and charge controller.
- **12v Solar Charge Controller:** A charge controller is necessary to put the power from the solar panel into a battery. It can also be used to charge the battery with 12v current from a wall adapter.
- **8ah LiFePO4 Battery:** Durable, compact and sealed battery storage with plenty of capacity for connected systems.
- **12v to 5v DC Buck Converter:** This device converts the 12v power from the battery and solar panel into 5v power required by the Raspberry Pi.
- **12v DC Power Supply:** Simple power supply to charge the battery in case solar power ever falls short.
- **12v Waterproof Relay:** A switch to toggle the 12v power supply, controlled by the Raspberry Pi.
- **RJ12 to DB9 Adapter:** Allows the solar charge controller to be connected to the RS232 adapter.

## Sensors
An array of sensors monitoring growing conditions in multiple areas can be connected into a mesh network and leveraged to collect invaluable data.

- **ESP32 Modules:** Low power wifi-connected micro controllers compatible with a variety of sensors and powered by a small battery.
- **Soil Moisture Sensors:** Ground probes to detect the humidity level in soil.
- **Temperature Sensors:** Durable waterproof temperature probes.
- **Light Sensors:** Basic light intensity sensors.
- **3000mAh Batteries:** Rechargable batteries for ESP32 capable of powering the devices for several days of operation.
- **6 Channel Battery Charger:** Battery charging unit capable of recharging half a dozen batteries at a time for the ESP32s.
- **Solar Sensor Charger:** Miniature solar panel and charge controller made for an ESP32 to keep the battery perpetually charged.
