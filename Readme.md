# solarlog-api

This NPM package provides a full nodejs-api for the Solar-Log device to fetch data of the solar-log device.

## Usage

- Install NPM package from GitHub.
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
