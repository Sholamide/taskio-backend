export class UpdateTaskDto {
    title: string;
    description: string;
    category: string;
    dueDate: Date;
    uploadedAt: Date;
    photoUrls:string[];
}