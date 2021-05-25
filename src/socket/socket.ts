export class Socket{
    socket: any;
    constructor(socket: any){
        this.socket=socket
        this.socket.on('startChat',(data: any)=>this.findChat(data))
        this.socket.on('newMessage',(data: any)=> this.sendMessage(data))
    }

    async findChat(data:any){
        console.log(data);
        
    }

    async sendMessage(data:any){
        console.log(data);
        
    }
}