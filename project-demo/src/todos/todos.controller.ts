import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TodosService } from "./todos.service";

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService){}

    @Get("all")
    getAll(){
        return this.todosService.getAll();
    }

    @Get(":id")
    getTodo(@Param("id") id){
       return this.todosService.getTodo(parseInt(id));
    }

    @Post()
    createTodo(@Body() body){
        console.log(body);
        return body;
    }

}
