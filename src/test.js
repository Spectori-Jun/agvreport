"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var index = require('./routes/index');
var report = require('./routes/report');
var app = (0, express_1.default)();
var PORT = 3000;
var publicPath = express_1.default.static(path_1.default.join(__dirname, '/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use('/public', publicPath);
app.get('/', index);
app.get('/report', report);
app.use('/report', function (res, req) {
    req.send('report.ejs');
});
app.listen(PORT, function () {
    console.log('connected');
});
