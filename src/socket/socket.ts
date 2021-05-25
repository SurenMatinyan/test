
export class Socket{
    socket: any;
    constructor(socket: any){
        this.socket=socket
        this.socket.on('findChat',(data: any)=>this.findChat(data))
        this.socket.on('newMessage',(data: any)=> this.sendMessage(data))
    }

    async findChat(data:any){
        this.socket.emit("getmessage")
    }

    async sendMessage(data:any){
       
    }
}