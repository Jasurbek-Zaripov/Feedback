import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
    author: { type: 'string', required: [true, 'Author empty!'] },
    sugg: { type: 'string', required: [true, 'Author empty!'] },
    comment: { type: 'string', required: [true, 'Comment empty!'], maxlength: [500, 'Comment is too long!'], minlength: [4, 'Comment is too short!'] },
    created_at: { type: Schema.Types.Date, default: Date.now },
    child_comment: {
        type: [
            {
                author: { type: 'string', required: [true, 'Author empty!'] },
                comment: { type: 'string', required: [true, 'Comment empty!'], maxlength: [500, 'Comment is too long!'], minlength: [4, 'Comment is too short!'] },
                created_at: { type: Schema.Types.Date, default: Date.now },
            }
        ]
    }
});
const commentModel = model('Comment', schema);
export { commentModel };