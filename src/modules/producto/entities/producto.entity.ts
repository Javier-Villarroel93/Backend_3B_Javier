import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";
import { Categoria } from "../../categoria/entities/categoria.entity";
//import { Categoria } from "src/modules/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
        id: number;

        @Column()
        nombre: string;

        @Column()
        precio: number;

        @Column()
        stock: number;

        @Column()
        image: string;

        @Column()
        estado: boolean;

        @ManyToOne(()=>Categoria, (cat)=>cat.producto)
        categoria: Categoria

    
}