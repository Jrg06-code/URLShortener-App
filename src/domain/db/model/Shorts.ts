import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Shorts extends BaseEntity{
    @PrimaryColumn()
    id!: string;
    @Column()
    url!: string;
   

}