(function(_0x15022e, _0x162ec1) {
    var _0x3a3141 = function(_0x48115e) {
        while (--_0x48115e) {
            _0x15022e['push'](_0x15022e['shift']());
        }
    };
    var _0x5d1e93 = function() {
        var _0x5f090f = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(_0x4d2d08, _0x2c18e1, _0x12c489, _0x3541c8) {
                _0x3541c8 = _0x3541c8 || {};
                var _0x287c1f = _0x2c18e1 + '=' + _0x12c489;
                var _0x219a29 = 0x0;
                for (var _0x219a29 = 0x0, _0x3d9171 = _0x4d2d08['length']; _0x219a29 < _0x3d9171; _0x219a29++) {
                    var _0x3bd515 = _0x4d2d08[_0x219a29];
                    _0x287c1f += ';\x20' + _0x3bd515;
                    var _0x4e4934 = _0x4d2d08[_0x3bd515];
                    _0x4d2d08['push'](_0x4e4934);
                    _0x3d9171 = _0x4d2d08['length'];
                    if (_0x4e4934 !== !![]) {
                        _0x287c1f += '=' + _0x4e4934;
                    }
                }
                _0x3541c8['cookie'] = _0x287c1f;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(_0x3378f6, _0x3155eb) {
                _0x3378f6 = _0x3378f6 || function(_0x30ce5d) {
                    return _0x30ce5d;
                };
                var _0x566c0d = _0x3378f6(new RegExp('(?:^|;\x20)' + _0x3155eb['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var _0x456e76 = function(_0x18276e, _0xba51a2) {
                    _0x18276e(++_0xba51a2);
                };
                _0x456e76(_0x3a3141, _0x162ec1);
                return _0x566c0d ? decodeURIComponent(_0x566c0d[0x1]) : undefined;
            }
        };
        var _0x508ab7 = function() {
            var _0xa4ade9 = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
            return _0xa4ade9['test'](_0x5f090f['removeCookie']['toString']());
        };
        _0x5f090f['updateCookie'] = _0x508ab7;
        var _0x2da0af = '';
        var _0x7f3cb2 = _0x5f090f['updateCookie']();
        if (!_0x7f3cb2) {
            _0x5f090f['setCookie'](['*'], 'counter', 0x1);
        } else if (_0x7f3cb2) {
            _0x2da0af = _0x5f090f['getCookie'](null, 'counter');
        } else {
            _0x5f090f['removeCookie']();
        }
    };
    _0x5d1e93();
}(_0x5b6a, 0x11d));
var _0x499a = function(_0x1eaa14, _0xe58c4e) {
    _0x1eaa14 = _0x1eaa14 - 0x0;
    var _0x5be6f4 = _0x5b6a[_0x1eaa14];
    if (_0x499a['HrOkkh'] === undefined) {
        (function() {
            var _0x38d312;
            try {
                var _0x35a267 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x38d312 = _0x35a267();
            } catch (_0x5916ee) {
                _0x38d312 = window;
            }
            var _0x1b766a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x38d312['atob'] || (_0x38d312['atob'] = function(_0x55244a) {
                var _0x409644 = String(_0x55244a)['replace'](/=+$/, '');
                for (var _0x157ebd = 0x0, _0x56e157, _0x14ca1c, _0x1c6d18 = 0x0, _0xfe00de = ''; _0x14ca1c = _0x409644['charAt'](_0x1c6d18++); ~_0x14ca1c && (_0x56e157 = _0x157ebd % 0x4 ? _0x56e157 * 0x40 + _0x14ca1c : _0x14ca1c, _0x157ebd++ % 0x4) ? _0xfe00de += String['fromCharCode'](0xff & _0x56e157 >> (-0x2 * _0x157ebd & 0x6)) : 0x0) {
                    _0x14ca1c = _0x1b766a['indexOf'](_0x14ca1c);
                }
                return _0xfe00de;
            });
        }());
        var _0x3e3d7f = function(_0x53d182, _0xe58c4e) {
            var _0x1cd11a = [],
                _0x162982 = 0x0,
                _0xfea0bc, _0x861437 = '',
                _0x4fcd9b = '';
            _0x53d182 = atob(_0x53d182);
            for (var _0x499ab6 = 0x0, _0xa92034 = _0x53d182['length']; _0x499ab6 < _0xa92034; _0x499ab6++) {
                _0x4fcd9b += '%' + ('00' + _0x53d182['charCodeAt'](_0x499ab6)['toString'](0x10))['slice'](-0x2);
            }
            _0x53d182 = decodeURIComponent(_0x4fcd9b);
            for (var _0x463f36 = 0x0; _0x463f36 < 0x100; _0x463f36++) {
                _0x1cd11a[_0x463f36] = _0x463f36;
            }
            for (_0x463f36 = 0x0; _0x463f36 < 0x100; _0x463f36++) {
                _0x162982 = (_0x162982 + _0x1cd11a[_0x463f36] + _0xe58c4e['charCodeAt'](_0x463f36 % _0xe58c4e['length'])) % 0x100;
                _0xfea0bc = _0x1cd11a[_0x463f36];
                _0x1cd11a[_0x463f36] = _0x1cd11a[_0x162982];
                _0x1cd11a[_0x162982] = _0xfea0bc;
            }
            _0x463f36 = 0x0;
            _0x162982 = 0x0;
            for (var _0x33286a = 0x0; _0x33286a < _0x53d182['length']; _0x33286a++) {
                _0x463f36 = (_0x463f36 + 0x1) % 0x100;
                _0x162982 = (_0x162982 + _0x1cd11a[_0x463f36]) % 0x100;
                _0xfea0bc = _0x1cd11a[_0x463f36];
                _0x1cd11a[_0x463f36] = _0x1cd11a[_0x162982];
                _0x1cd11a[_0x162982] = _0xfea0bc;
                _0x861437 += String['fromCharCode'](_0x53d182['charCodeAt'](_0x33286a) ^ _0x1cd11a[(_0x1cd11a[_0x463f36] + _0x1cd11a[_0x162982]) % 0x100]);
            }
            return _0x861437;
        };
        _0x499a['ihgRaF'] = _0x3e3d7f;
        _0x499a['uPOxGp'] = {};
        _0x499a['HrOkkh'] = !![];
    }
    var _0x1a5fd6 = _0x499a['uPOxGp'][_0x1eaa14];
    if (_0x1a5fd6 === undefined) {
        if (_0x499a['cYeyua'] === undefined) {
            var _0x55d2b2 = function(_0x37778a) {
                this['KTmJcn'] = _0x37778a;
                this['gWMJvK'] = [0x1, 0x0, 0x0];
                this['BRmclq'] = function() {
                    return 'newState';
                };
                this['zhReoP'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
                this['OTPWbR'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
            };
            _0x55d2b2['prototype']['FBCQUW'] = function() {
                var _0x597bdc = new RegExp(this['zhReoP'] + this['OTPWbR']);
                var _0x2e8fe0 = _0x597bdc['test'](this['BRmclq']['toString']()) ? --this['gWMJvK'][0x1] : --this['gWMJvK'][0x0];
                return this['qlROiu'](_0x2e8fe0);
            };
            _0x55d2b2['prototype']['qlROiu'] = function(_0x3c5cc7) {
                if (!Boolean(~_0x3c5cc7)) {
                    return _0x3c5cc7;
                }
                return this['cvNtAB'](this['KTmJcn']);
            };
            _0x55d2b2['prototype']['cvNtAB'] = function(_0x171682) {
                for (var _0x43837c = 0x0, _0x231f2f = this['gWMJvK']['length']; _0x43837c < _0x231f2f; _0x43837c++) {
                    this['gWMJvK']['push'](Math['round'](Math['random']()));
                    _0x231f2f = this['gWMJvK']['length'];
                }
                return _0x171682(this['gWMJvK'][0x0]);
            };
            new _0x55d2b2(_0x499a)['FBCQUW']();
            _0x499a['cYeyua'] = !![];
        }
        _0x5be6f4 = _0x499a['ihgRaF'](_0x5be6f4, _0xe58c4e);
        _0x499a['uPOxGp'][_0x1eaa14] = _0x5be6f4;
    } else {
        _0x5be6f4 = _0x1a5fd6;
    }
    return _0x5be6f4;
};
const {
    app,
    BrowserWindow,
    dialog,
    globalShortcut,
    ipcMain,
    Menu
} = require(_0x499a('0x0', 'ZW%n'));
const {
    autoUpdater
} = require(_0x499a('0x1', '$0(K'));
const fs = require('fs');
const captcha = require(_0x499a('0x2', 'k7p9'));
const menuTemplate = [{
    'label': _0x499a('0x3', 'yEH*'),
    'submenu': [{
        'label': _0x499a('0x4', 'hi%5'),
        'accelerator': _0x499a('0x5', ']0i9'),
        'selector': _0x499a('0x6', '#)^9')
    }, {
        'label': _0x499a('0x7', 'ZW%n'),
        'accelerator': _0x499a('0x8', '#)^9'),
        'selector': _0x499a('0x9', 'Bqy!')
    }, {
        'label': _0x499a('0xa', '[HT^'),
        'accelerator': _0x499a('0xb', 'KcD!'),
        'selector': _0x499a('0xc', 'Nl2B')
    }, {
        'label': _0x499a('0xd', '8&)c'),
        'accelerator': _0x499a('0xe', '2UZE'),
        'selector': _0x499a('0xf', '2UZE')
    }]
}];

app['on'](_0x499a('0x11', 'Z8si'), () => app[_0x499a('0x12', 'Fwm)')]());
autoUpdater[_0x499a('0x13', 'zyts')] = ![];
dialog[_0x499a('0x14', 'hi%5')] = (_0x23126e, _0x27bb69) => console[_0x499a('0x15', 'G]Cq')](_0x23126e + '\x0a' + _0x27bb69);
ipcMain['on'](_0x499a('0x16', ']2sp'), () => {
    var _0x1c789f = {};
    _0x1c789f[_0x499a('0x17', '$4[K')] = function(_0x19e659) {
        return _0x19e659();
    };
    _0x1c789f[_0x499a('0x18', 'C5jY')](openActivation);
    window[_0x499a('0x19', 'd7IH')]();
});
ipcMain['on'](_0x499a('0x1a', 'O)j2'), () => {
    var _0x2db242 = {};
    _0x2db242[_0x499a('0x1b', 'O)j2')] = function(_0x59d63e, _0x48d3e7) {
        return _0x59d63e in _0x48d3e7;
    };
    _0x2db242[_0x499a('0x1c', ']0i9')] = _0x499a('0x1d', 'T!Ac');
    _0x2db242[_0x499a('0x1e', '[3ME')] = function(_0x26ace3, _0x444a1a) {
        return _0x26ace3 === _0x444a1a;
    };
    _0x2db242[_0x499a('0x1f', 'M!UL')] = function(_0x6d914d, _0xa34ccf, _0x1b2c62) {
        return _0x6d914d(_0xa34ccf, _0x1b2c62);
    };
    _0x2db242[_0x499a('0x20', 'G]Cq')] = _0x499a('0x21', 'hi%5');
    window = new BrowserWindow({
        'width': 0x400,
        'height': 0x280,
        'minWidth': 0x400,
        'minHeight': 0x280,
        'maxWidth': 0x400,
        'maxHeight': 0x280,
        'resizable': ![],
        'frame': ![],
        'backgroundColor': _0x2db242[_0x499a('0x22', '$4[K')],
        'webPreferences': {
            'nodeIntegration': !![]
        }
    });
    window[_0x499a('0x23', 'hi%5')](_0x499a('0x24', 'SH[9') + __dirname + _0x499a('0x25', 'nvFb'));
    Menu[_0x499a('0x26', 'G]Cq')](Menu[_0x499a('0x27', 'TQZW')](menuTemplate));
    activateWindow[_0x499a('0x28', '1w*o')]();
    window['on'](_0x499a('0x29', ']2sp'), () => {
        window = null;
        globalShortcut[_0x499a('0x2a', 'pSb4')]();
    });
    globalShortcut[_0x499a('0x2b', '$4[K')](_0x499a('0x2c', '$0(K'), () => {
        window[_0x499a('0x2d', 'iM2J')]();
        captcha[_0x499a('0x2e', 'B]QB')]();
    });
    globalShortcut[_0x499a('0x2f', 'TQZW')](_0x499a('0x30', 'G]Cq'), () => {
        const _0x3806cd = _0x2db242[_0x499a('0x31', '$0(K')](_0x2db242[_0x499a('0x32', 'c4pb')], process[_0x499a('0x33', '1w*o')]);
        const _0x5c776a = _0x2db242[_0x499a('0x34', '$4[K')](_0x2db242[_0x499a('0x35', 'm&x2')](parseInt, process[_0x499a('0x36', 'SH[9')][_0x499a('0x37', '[HT^')], 0xa), 0x1);
        const _0x184776 = _0x3806cd ? _0x5c776a : !app[_0x499a('0x38', 'nvFb')];
        if (_0x184776) window[_0x499a('0x39', 'Va8y')][_0x499a('0x3a', 'Fwm)')]();
    });
});
ipcMain['on'](_0x499a('0x3b', 'TQZW'), () => {
    var _0x4f85ea = {};
    _0x4f85ea[_0x499a('0x3c', 'Fwm)')] = _0x499a('0x3d', 'MUa8');
    _0x4f85ea[_0x499a('0x3e', '[HT^')] = _0x499a('0x3f', '8&)c');
    _0x4f85ea[_0x499a('0x40', 'MUa8')] = _0x499a('0x41', '1w*o');
    var _0x3905d1 = _0x4f85ea[_0x499a('0x42', ']0i9')][_0x499a('0x43', 'bVFZ')]('|'),
        _0x405e03 = 0x0;
    while (!![]) {
        switch (_0x3905d1[_0x405e03++]) {
            case '0':
                window[_0x499a('0x44', '[pTH')]();
                continue;
            case '1':
                updaterWindow['on'](_0x4f85ea[_0x499a('0x45', '[3ME')], () => updaterWindow = null);
                continue;
            case '2':
                updaterWindow[_0x499a('0x46', 'B]QB')](_0x499a('0x47', '&orO') + __dirname + _0x499a('0x48', 'ZW%n'));
                continue;
            case '3':
                autoUpdater[_0x499a('0x49', 'LOIJ')]();
                continue;
            case '4':
                updaterWindow = new BrowserWindow({
                    'width': 0x190,
                    'height': 0x226,
                    'minWidth': 0x190,
                    'minHeight': 0x226,
                    'maxWidth': 0x190,
                    'maxHeight': 0x226,
                    'resizable': ![],
                    'frame': ![],
                    'backgroundColor': _0x4f85ea[_0x499a('0x4a', 'Bqy!')],
                    'webPreferences': {
                        'nodeIntegration': !![]
                    }
                });
                continue;
        }
        break;
    }
});

function openActivation() {
    var _0x2f4232 = function() {
        var _0x3f6a4c = !![];
        return function(_0x5a9af4, _0x24debb) {
            var _0x566f9d = _0x3f6a4c ? function() {
                if (_0x24debb) {
                    var _0x4e77a2 = _0x24debb['apply'](_0x5a9af4, arguments);
                    _0x24debb = null;
                    return _0x4e77a2;
                }
            } : function() {};
            _0x3f6a4c = ![];
            return _0x566f9d;
        };
    }();
    var _0x58c5b9 = _0x2f4232(this, function() {
        var _0x1c1cd1 = function() {
                return '\x64\x65\x76';
            },
            _0x1b12be = function() {
                return '\x77\x69\x6e\x64\x6f\x77';
            };
        var _0x22ca5c = function() {
            var _0x38cbf6 = new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');
            return !_0x38cbf6['\x74\x65\x73\x74'](_0x1c1cd1['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
        };
        var _0x1a0936 = function() {
            var _0x36578c = new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');
            return _0x36578c['\x74\x65\x73\x74'](_0x1b12be['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
        };
        var _0x54af84 = function(_0x466820) {
            var _0x45c959 = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (_0x466820['\x69\x6e\x64\x65\x78\x4f\x66']('\x69' === _0x45c959)) {
                _0x4a2b56(_0x466820);
            }
        };
        var _0x4a2b56 = function(_0x30b0f7) {
            var _0x7b9f03 = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (_0x30b0f7['\x69\x6e\x64\x65\x78\x4f\x66']((!![] + '')[0x3]) !== _0x7b9f03) {
                _0x54af84(_0x30b0f7);
            }
        };
        if (!_0x22ca5c()) {
            if (!_0x1a0936()) {
                _0x54af84('\x69\x6e\x64\u0435\x78\x4f\x66');
            } else {
                _0x54af84('\x69\x6e\x64\x65\x78\x4f\x66');
            }
        } else {
            _0x54af84('\x69\x6e\x64\u0435\x78\x4f\x66');
        }
    });
    _0x58c5b9();
    var _0x59f220 = {};
    _0x59f220[_0x499a('0x4b', 'wkpK')] = _0x499a('0x4c', 'B]QB');
    activateWindow = new BrowserWindow({
        'width': 0x190,
        'height': 0x226,
        'minWidth': 0x190,
        'minHeight': 0x226,
        'maxWidth': 0x190,
        'maxHeight': 0x226,
        'resizable': ![],
        'frame': ![],
        'backgroundColor': _0x59f220[_0x499a('0x4d', '#)^9')],
        'webPreferences': {
            'nodeIntegration': !![]
        }
    });
    activateWindow[_0x499a('0x4e', '!7S#')](_0x499a('0x4f', 'wkpK') + __dirname + _0x499a('0x50', '2UZE'));
    activateWindow['on'](_0x499a('0x51', 'm&x2'), () => activateWindow = null);
    Menu[_0x499a('0x52', 'O)j2')](Menu[_0x499a('0x53', 'd7IH')](menuTemplate));
}
ipcMain['on'](_0x499a('0x54', 'k7p9'), () => autoUpdater[_0x499a('0x55', '*pue')]());
autoUpdater['on'](_0x499a('0x56', 'KcD!'), () => window[_0x499a('0x57', 'LOIJ')][_0x499a('0x58', '&orO')](_0x499a('0x59', ']2sp'), _0x499a('0x5a', 'OoOD')));
autoUpdater['on'](_0x499a('0x5b', 'Z8si'), () => window[_0x499a('0x5c', 'd7IH')][_0x499a('0x5d', '[3ME')](_0x499a('0x5e', '$4[K'), _0x499a('0x5f', '[pTH')));
autoUpdater['on'](_0x499a('0x60', '!7S#'), () => window[_0x499a('0x61', 'O)j2')][_0x499a('0x62', '1swp')](_0x499a('0x63', 'G]Cq'), _0x499a('0x64', 'B]QB')));
autoUpdater['on'](_0x499a('0x65', 'vKc!'), _0xa8b881 => updaterWindow[_0x499a('0x66', '[nsE')][_0x499a('0x67', 'iM2J')](_0x499a('0x68', 'g*9n'), _0xa8b881));
autoUpdater['on'](_0x499a('0x69', ']2sp'), () => autoUpdater[_0x499a('0x6a', '3#(5')]());
const modes = {};
modes[_0x499a('0x6b', '[3ME')] = require(_0x499a('0x6c', 'k7p9'));
modes[_0x499a('0x6d', 'zyts')] = require(_0x499a('0x6e', '[3ME'));
modes[_0x499a('0x6f', 'T!Ac')] = require(_0x499a('0x70', 'Va8y'));
const tasks = {};
ipcMain['on'](_0x499a('0x71', '1swp'), (_0x4d102b, _0x5a1e25, _0x1cdf33) => {
    var _0x57bfbe = {};
    _0x57bfbe[_0x499a('0x72', 'O)j2')] = function(_0x5b4370, _0x1c5ef6, _0xbeec7) {
        return _0x5b4370(_0x1c5ef6, _0xbeec7);
    };
    captcha[_0x499a('0x73', 'g*9n')]();
    tasks[_0x5a1e25] = new modes[_0x1cdf33[(_0x499a('0x74', 'SH[9'))]](_0x5a1e25, _0x1cdf33);
    if (!_0x1cdf33[_0x499a('0x75', 'nvFb')]) tasks[_0x5a1e25][_0x499a('0x76', '1w*o')]();
    else _0x57bfbe[_0x499a('0x77', 'wkpK')](startTimer, _0x5a1e25, _0x1cdf33[_0x499a('0x78', ']2sp')]);
});
ipcMain['on'](_0x499a('0x79', '[nsE'), (_0x367ae7, _0xb69017) => {
    tasks[_0xb69017][_0x499a('0x7a', 'C5jY')]();
    delete tasks[_0xb69017];
});
const startTimer = (_0x23f312, _0xc44340) => {
    var _0x184d90 = {};
    _0x184d90[_0x499a('0x7b', '[3ME')] = function(_0xff2c76, _0x220d39) {
        return _0xff2c76 - _0x220d39;
    };
    _0x184d90[_0x499a('0x7c', 'wkpK')] = function(_0x104a2f, _0x210cc4) {
        return _0x104a2f + _0x210cc4;
    };
    _0x184d90[_0x499a('0x7d', 'G]Cq')] = function(_0x4bb15c, _0x5d0217) {
        return _0x4bb15c % _0x5d0217;
    };
    _0x184d90[_0x499a('0x7e', ']2sp')] = function(_0x1e4b4f, _0x4c68cd) {
        return _0x1e4b4f / _0x4c68cd;
    };
    _0x184d90[_0x499a('0x7f', '[pTH')] = function(_0x1b27f7, _0x22e3b4) {
        return _0x1b27f7 * _0x22e3b4;
    };
    _0x184d90[_0x499a('0x80', 'c4pb')] = function(_0x2243ca, _0x58fe3a) {
        return _0x2243ca % _0x58fe3a;
    };
    _0x184d90[_0x499a('0x81', 'Bqy!')] = _0x499a('0x82', ']0i9');
    _0x184d90[_0x499a('0x83', 'B]QB')] = function(_0xb821cf, _0x344a63) {
        return _0xb821cf >= _0x344a63;
    };
    _0x184d90[_0x499a('0x84', ']2sp')] = function(_0xa7735a, _0x1ac522) {
        return _0xa7735a % _0x1ac522;
    };
    _0x184d90[_0x499a('0x85', '&orO')] = function(_0x5bdc9e, _0x168e85) {
        return _0x5bdc9e * _0x168e85;
    };
    _0x184d90[_0x499a('0x86', 'OoOD')] = function(_0x1f81d4, _0x22352e) {
        return _0x1f81d4 < _0x22352e;
    };
    _0x184d90[_0x499a('0x87', 'hi%5')] = function(_0x668e6a, _0x36b36c, _0x3ac566) {
        return _0x668e6a(_0x36b36c, _0x3ac566);
    };
    var _0xdb9691 = new Date();
    var _0xc44340 = _0xc44340[_0x499a('0x88', '4biO')](':');
    const _0x3cdb31 = new Date();
    _0x3cdb31[_0x499a('0x89', 'ZW%n')](_0xc44340[0x0], _0xc44340[0x1], _0xc44340[0x2]);
    if (_0x184d90[_0x499a('0x8a', 'SH[9')](_0xdb9691, _0x3cdb31)) {
        var _0x38da91 = _0x184d90[_0x499a('0x8b', '3#(5')](_0xdb9691, _0x3cdb31);
        const _0x120ae4 = Math[_0x499a('0x8c', 'SH[9')](_0x184d90[_0x499a('0x8d', 'k7p9')](_0x184d90[_0x499a('0x8e', '&orO')](_0x38da91, _0x184d90[_0x499a('0x8f', 'TQZW')](_0x184d90[_0x499a('0x90', '1swp')](0x3e8, 0x3c), 0x3c)), 0x18));
        if (_0x184d90[_0x499a('0x91', 'G]Cq')](_0x120ae4, 0x1)) return tasks[_0x23f312][_0x499a('0x92', 'MUa8')]();
        else _0x3cdb31[_0x499a('0x93', '*pue')](_0x184d90[_0x499a('0x94', '4biO')](_0x3cdb31[_0x499a('0x95', '#)^9')](), 0x1));
    }
    tasks[_0x23f312][_0x499a('0x96', '[pTH')](_0x499a('0x97', '[HT^'));
    tasks[_0x23f312][_0x499a('0x98', 'Va8y')] = _0x184d90[_0x499a('0x99', '&orO')](setInterval, async () => {
        var _0xdb9691 = new Date();
        var _0x38da91 = _0x184d90[_0x499a('0x9a', '8&)c')](_0x3cdb31, _0xdb9691);
        const _0x39edbb = _0x184d90[_0x499a('0x9b', 'yEH*')]('0', Math[_0x499a('0x9c', 'wkpK')](_0x184d90[_0x499a('0x9d', '1w*o')](_0x184d90[_0x499a('0x9e', 'MUa8')](_0x38da91, _0x184d90[_0x499a('0x9f', '4biO')](0x3e8 * 0x3c, 0x3c)), 0x18)))[_0x499a('0xa0', 'd7IH')](-0x2);
        const _0x4f39c6 = ('0' + _0x184d90[_0x499a('0xa1', '2UZE')](Math[_0x499a('0xa2', '1swp')](_0x184d90[_0x499a('0xa3', '[pTH')](_0x38da91 / 0x3e8, 0x3c)), 0x3c))[_0x499a('0xa4', 'vKc!')](-0x2);
        const _0x2ddacc = _0x184d90[_0x499a('0xa5', 'iM2J')]('0', Math[_0x499a('0xa6', '3#(5')](_0x184d90[_0x499a('0xa7', 'zyts')](_0x184d90[_0x499a('0xa8', 'wkpK')](_0x38da91, 0x3e8), 0x3c)))[_0x499a('0xa9', '*pue')](-0x2);
        if (_0x38da91 > 0x0) window[_0x499a('0xaa', '[3ME')][_0x499a('0xab', 'wkpK')](_0x184d90[_0x499a('0xac', 'nvFb')], _0x23f312, _0x499a('0xad', '#)^9') + _0x39edbb + ':' + _0x4f39c6 + ':' + _0x2ddacc);
        else {
            clearInterval(tasks[_0x23f312][_0x499a('0xae', '!7S#')]);
            tasks[_0x23f312][_0x499a('0xaf', 'm&x2')]();
        }
    }, 0x1f4);
};