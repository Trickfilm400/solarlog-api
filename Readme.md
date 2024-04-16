# solarlog-api

This NPM package provides a full nodejs-api for the Solar-Log device to fetch data of the solar-log device.

Tested with SolarLog 500 device.

Implements one part of the API which is documented here: https://github.com/iobroker-community-adapters/ioBroker.solarlog/blob/master/docs/solarlog_dataobjects.md (or: https://github.com/iobroker-community-adapters/ioBroker.solarlog/blob/9e92005e51ca10e3692319545688805ecb1396ec/docs/solarlog_dataobjects.md)

If you need more requests implemented, just create an issue.

## Usage

- Install NPM package from GitHub or NPM.
- Function return a Promise

## Example

```typescript
import SolarLogAPI from "@trickfilm400/solar-log";

const client = new SolarLogAPI("<IP / Host of device", [0, 1, 2] /* Array of numbers of inverters*/);

client.getStatusAndProduction().then((res) => {
    console.log(res);
    /*
     * {
         status: { '0': 'MPP', '1': 'MPP', '2': 'MPP' },
         production: { '0': '566', '1': '588', '2': '846' }
        }
     *
     *
     */
}).catch(console.error);
```

&copy; 2022-2024 Trickfilm400
