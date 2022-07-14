import mongoose from 'mongoose';

//user attributes in mongo schema
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String}
});

//declaring User as mongoose model taking userSchema
const User = mongoose.model('User', userSchema);

export default User;