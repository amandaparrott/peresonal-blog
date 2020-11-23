
import { Query } from './index';

// const newTag = (blogid: number, tagid: string) => Query(`
// INSERT INTO blogtags (blogid, tagid) values
// (?, ?)
// `, [blogid, tagid]); 

const newTag = (blogid: number, tags: []) => {
    tags.forEach(async (tagName) => {
        const tagId = await Query(`
        SELECT tags.id from tags
        WHERE tags.name = ?
        `, [tagName]);
        Query(`
        INSERT INTO blogtags (blogid, tagid)
        VALUES (?, ?)
    `, [blogid, tagId[0].id])
})
}

const getBlogTags = (blogid: number) => Query(`
    CALL spBlogTags(?)
`, [blogid]);

const getAllTags = () => Query(`
    SELECT * FROM tags
`)



// const getTags
// const editTag
// const deleteTag

export default {
    newTag,
    getBlogTags,
    getAllTags,
}

