const UserIsAdmin = async (user ,UserDB) => {
    try {
        if (!user || !user.isAdmin) {

            return false;

        } 

        const {email, id} = user
        const savedUser = await UserDB.findOne({email, id})
    
        if (!savedUser || !savedUser.isAdmin) {
          
     
             return false;
        } 
        return true
    }
    catch(err) {
        console.log(err);
        throw err
    }

}

module.exports = UserIsAdmin 