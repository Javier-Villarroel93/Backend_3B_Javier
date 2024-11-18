import { DataSource } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Inject } from "@nestjs/common";

export const categoriaProvider=[
    {
        provide:'CATEGORIA_REPOSITORY',
        useFactory: (DataSource:DataSource)=>DataSource.getTreeRepository(Categoria),
        inject:['DATABASE_CONNECTION_POSTGRES']
    }
]