import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
//import { User } from "src/modules/users/entities/user.entity";
import { User } from "../../users/entities/user.entity";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    detalle:string;
    @ManyToMany(()=>User)
    @JoinTable({name:'roles_user'})
    users:User[]
    
}
