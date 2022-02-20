import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
    username: { type: 'string', required: [true, 'Username empty!'], maxlength: [50, 'Username is too long!'], minlength: [4, 'Username is too short!'] },
    avatar: { type: 'string', required: [true, 'Filename empty!'], maxlength: [400, 'Filename is too long!'], minlength: [4, 'Filename is too short!'] },
    buffer: { type: Schema.Types.Buffer },
    mime_type: { type: 'string' },
    nikname: { type: 'string', required: [true, 'Nikname empty!'], maxlength: [50, 'Nikname is too long!'], minlength: [4, 'Nikname is too short!'], unique: true },
    profession: { type: 'string', required: [true, 'Profession empty!'], maxlength: [50, 'Profession name is too long!'], minlength: [4, 'Profession name is too short!'] },
    created_at: { type: Schema.Types.Date, default: Date.now }
});

const userModel = model('User', schema);
export { userModel };