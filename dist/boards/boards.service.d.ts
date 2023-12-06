import { CreateBoardDto, ReportCount } from './dto/create.board.dto';
import { BoardEntity } from './entity/board.entity';
import { Repository } from 'typeorm';
export declare class BoardsService {
    private boardDB;
    constructor(boardDB: Repository<BoardEntity>);
    getAllBoards(): Promise<BoardEntity[]>;
    getBoardByPage(page: number): Promise<{
        success: boolean;
        body: BoardEntity[];
        next: number;
    }>;
    createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity>;
    getBoardById(id: number): Promise<BoardEntity>;
    deleteBoard(id: number): Promise<void>;
    reportBoard(id: number, reportCount: ReportCount): Promise<void>;
}
