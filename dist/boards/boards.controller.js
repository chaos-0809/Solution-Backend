"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const boards_service_1 = require("./boards.service");
const create_board_dto_1 = require("./dto/create.board.dto");
const common_2 = require("@nestjs/common");
let BoardsController = class BoardsController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    getAllBoard() {
        return this.boardService.getAllBoards();
    }
    getBoardByPage(page) {
        return this.boardService.getBoardByPage(page);
    }
    createBoard(createBoardDto) {
        return this.boardService.createBoard(createBoardDto);
    }
    getBoardId(id) {
        return this.boardService.getBoardById(id);
    }
    deleteBoard(id) {
        this.boardService.deleteBoard(id);
    }
    async reportBoard(id, ReportCount) {
        await this.boardService.reportBoard(id, ReportCount);
    }
};
exports.BoardsController = BoardsController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "getAllBoard", null);
__decorate([
    (0, common_1.Get)('/page/:page'),
    __param(0, (0, common_2.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "getBoardByPage", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_board_dto_1.CreateBoardDto]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "createBoard", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "getBoardId", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "deleteBoard", null);
__decorate([
    (0, common_1.Post)(':id/report'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_board_dto_1.ReportCount]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "reportBoard", null);
exports.BoardsController = BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
//# sourceMappingURL=boards.controller.js.map