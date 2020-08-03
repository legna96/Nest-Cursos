import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {

    getAll(){
        return [
            {id: 1, name: "Tarea 1"},
            {id: 2, name: "Tarea 2"},
        ]
    }

    getTodo(id: number){
        return {
            id,
            name: `Tarea ${id}`
        }
    }

}
