import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha:string;

    @Column()
    estado:number;

    @Column()
    observaciones:string;

    @ManyToMany(()=>Cliente)
    cliente:Cliente;
}
