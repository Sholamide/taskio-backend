import { User } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    category: string

    @Column()
    uploadTime: Date

    @Column()
    photoUrls: string[]

    @ManyToOne(type => User, user => user.tasks)
    user: User
}