
import { Query } from './index';

// const newTag = (blogid: number, tagid: string) => Query(`
// INSERT INTO blogtags (blogid, tagid) values
// (?, ?)
// `, [blogid, tagid]);

const getBlogTags = (id: string) => Query(`
    CALL spBlogTags(?)
`, [id]);

const getAllTags = () => Query(`
    SELECT * FROM tags
`)


// const getTags
// const editTag
// const deleteTag

export default {
    // newTag,
    getBlogTags,
    getAllTags
    

}

