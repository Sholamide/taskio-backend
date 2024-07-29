import { Body, Controller, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

//controller for handling incoming task-related requests and returning responses to the client
@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) { }

    //create a new task
    @Post()
    @HttpCode(201)
    async createTask(@Body() createtaskDto: CreateTaskDto) {
        return this.taskService.createTask(createtaskDto);
    }
    //get a task
    @Get("/:id")
    @HttpCode(200)
    async findTask(@Param() params: any) {
        return this.taskService.findTask(params.id);
    }

    //get all tasks
    @Get()
    @HttpCode(200)
    async findAllTasks() {
        return this.taskService.findAllTasks();
    }

    //update task
    @Patch("/:id")
    @HttpCode(200)
    async updateTask(@Param() params: any) {
        return this.taskService.updateTask(params.id)
    }


}
