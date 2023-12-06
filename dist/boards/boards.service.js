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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_model_1 = require("./board.model");
const board_entity_1 = require("./entity/board.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let BoardsService = class BoardsService {
    constructor(boardDB) {
        this.boardDB = boardDB;
    }
    getAllBoards() {
        return this.boardDB.find();
    }
    async getBoardByPage(page) {
        const boards = await this.boardDB.find({
            take: 10,
            skip: (page - 1) * 10,
        });
        return {
            success: true,
            body: boards,
            next: page + 1,
        };
    }
    async createBoard(createBoardDto) {
        const { title, description, name, password, categories } = createBoardDto;
        const board = this.boardDB.create({
            title,
            description,
            status: board_model_1.BoardStatus.PUBLIC,
            name,
            password,
            categories,
        });
        await this.boardDB.save(board);
        return board;
    }
    async getBoardById(id) {
        const found = await this.boardDB.findOneBy({ id });
        if (!found) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }
    async deleteBoard(id) {
        const result = await this.boardDB.delete({ id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`can't find Board with id ${id}`);
        }
    }
    async reportBoard(id, reportCount) {
        const board = await this.boardDB.findOneBy({ id });
        if (!board) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        board.reportCount += 1;
        await this.boardDB.save(board);
        if (board.reportCount >= 5) {
            await this.deleteBoard(id);
        }
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(board_entity_1.BoardEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BoardsService);
//# sourceMappingURL=boards.service.js.map