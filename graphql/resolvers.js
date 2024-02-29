const UserSchema = require('../models/User')
const MessageSchema = require('../models/Message')

const resolvers = {    
        hello: () => {
            return "Hola Mundo!";
        },
        User: async (_, {id}) => {
            try {
                return user = await UserSchema.findById(id);
            }catch(e){
                console.log()
            }
        },
        Users: async () => {
            try{
                return await UserSchema.find();
            }
            catch(e){
                console.log(e)
            }
        },  
        UsersByFilter: async (_, {filter}) => {
            try{
                let query = {};

                if(filter){
                    if(filter.name){
                        // {name: "Mar"}
                        query.name = { $regex: filter.name, $options: 'i' } // 'i' se utiliza para hacer una busqueda insesible de mayusculas y minusculas
                    }
                    if(filter.email){
                        // {email: "juan@"}
                        query.email = { $regex: filter.email, $options: 'i'}
                    }
                    if(filter.lastname){
                        // {lastname: "San"}
                        query.lastname = { $regex: filter.lastname, $options: 'i' }
                    }

                    const users = await UserSchema.find(query)
                    return users;
                }

            }catch(e){
                console.log("Error obteniendo el usuario")

            }
        },
        Message: async (_, {id}) => {
            try {
                return message = await MessageSchema.findById(id).populate({
                    path: 'from',
                    select: '-password'})
                .populate({
                    path: 'to',
                    select: '-password'}) ;
            }catch(e){
                console.log()
            }
        },
        Messages: async () => {
            try{
                return await MessageSchema.find().populate({
                    path: 'from',
                    select: '-password'})
                .populate({
                    path: 'to',
                    select: '-password'});
            }
            catch(e){
                console.log(e)
            }
        }, 
        MessagesByFilter: async (_, {filter}) => {
            try{
                let query = {};
                if(filter){
                    if(filter.from){
                        query= {from: filter.from} 
                    }
                    if(filter.to){
                        query = { to: filter.to}
                    }
                    if(filter.body){
                        query.body = { $regex: filter.body, $options: 'i'}
                    }

                    const message = await MessageSchema.find(query).populate('from')
                                            .populate('to') 
                    return message;
                }

            }catch(e){
                console.log("Error obteniendo el mensaje")
            }
        },

        //Implementando House
        House: async (_,{code}) => {
            try {
               return house = await HouseSchema.findById(code);
            } catch(e){
               console.log(encodeURIComponent)
               
             }
    
           },
   
           Houses: async () =>{
           try {
               return await HouseSchema.find();
           } catch (e) {
               console.log(e)
            }
   
           },
    
           HousesByFilter: async(_,{filter}) =>{
           try {
               let query = {}
   
               if (filter){
                  if(filter.city){
                     query.city = {$regex: filter.city, $options: 'i'}// 'i' se utiliza para hacer una busqueda insesible de mayusculas y minusculas
                  }
   
               if (filter.state){
                   query.state = {$regex: filter.state, $options: 'i'}
               }
   
               if (filter.type){
                   query.type = {$regex: filter.type, $options: 'i'}
               }
               const Houses = await HouseSchema.find(query)
               return Houses;
               }
           } catch (e) {
               console.log("Error obteniendo la casa")
               
           }
         
   
           },
   

}
module.exports = resolvers