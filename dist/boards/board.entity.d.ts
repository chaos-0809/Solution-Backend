import { BaseEntity } from 'typeorm';
import { BoardStatus } from './board.model';
export declare class BoardEntity extends BaseEntity {
    id: number;
    title: string;
    description: string;
    name: string;
    password: string;
    categories: string;
    status: BoardStatus;
}
