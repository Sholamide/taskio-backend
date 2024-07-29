import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {

    //create a new task
    createTask(createtaskDto:CreateTaskDto) {
        return console.log("Create a new task")
    }

    //get a task
    findTask(id: string) {
        return console.log(`Get task #${id}`)
    }

    //get all tasks
    findAllTasks() {
        return console.log("Get all task")
    }

    //update task
    updateTask(id: string) {
        return console.log(`Update task #${id}`)
    }

    deleteTask(id: string) {
        return console.log(`Delete task #${id}`)

    }
}
