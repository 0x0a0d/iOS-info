#iOS-info

Export array of ios_version|iDevice|BundleId
```javascript
[
    ['1.1.1', 'iPhone1,1', '3A109a'],
    ...
]
```
## Install
```bash
npm i --save ios-info
```

## Usage

```javascript
const iOSs = require('ios-info')
//Get devices can install ios 10.3.3
iOSs.filter(([ios_version, device, bundle_id])=>ios_version=='10.3.3')
// Filter by device
iOSs.filter(([ios_version, device, bundle_id])=>device=='iPhone5,1')
```