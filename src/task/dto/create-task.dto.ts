export class CreateTaskDto {
    title: string;
    description: string;
    category: string;
    dueDate: Date;
    uploadedAt: Date;
    photoUrls:string[];
}