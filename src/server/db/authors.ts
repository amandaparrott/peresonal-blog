import { Query } from './index';

interface IAuthors{
    id?: number,
    name?: string,
    email?: string,
    _created?: Date
}

const newAuthor = (name: string) => Query(`
INSERT INTO authors (name)
VALUES (?)
`, [name]);



const findOneByEmail = async (email: string) => Query(`
SELECT * FROM authors
WHERE email = ?
`, [email]);

const findOneById = async (id: number) => Query(`
SELECT * FROM uthors
WHERE id = ?
`, [id]);

const insert = async (email: string, name: string, password: string) => Query(`
INSERT INTO authors (email, name, password) VALUES
(?, ?, ?)
`, [email, name, password]);

export default {
    newAuthor,
    findOneByEmail,
    findOneById,
    insert
}