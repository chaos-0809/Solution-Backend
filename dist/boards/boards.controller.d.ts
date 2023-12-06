import { BoardsService } from './boards.service';
import { CreateBoardDto, ReportCount } from './dto/create.board.dto';
export declare class BoardsController {
    private boardService;
    constructor(boardService: BoardsService);
    getAllBoard(): Promise<import("./entity/board.entity").BoardEntity[]>;
    getBoardByPage(page: number): Promise<{
        success: boolean;
        body: import("./entity/board.entity").BoardEntity[];
        next: number;
    }>;
    createBoard(createBoardDto: CreateBoardDto): Promise<import("./entity/board.entity").BoardEntity>;
    getBoardId(id: number): Promise<import("./entity/board.entity").BoardEntity>;
    deleteBoard(id: number): void;
    reportBoard(id: number, ReportCount: ReportCount): Promise<void>;
}
