-- create database blogs;
use blogs;

-- create table authors(
-- id int not null auto_increment primary key,
-- name varchar(100) not null,
-- email varchar(100) not null,
-- _created datetime default current_timestamp
-- );

-- create table blogs(
-- id int not null auto_increment primary key,
-- title text not null,
-- content text not null,
-- authorid int not null,
-- _created datetime default current_timestamp
-- );

-- create table tags(
-- id int not null auto_increment primary key,
-- name text not null,
-- _created datetime default current_timestamp
-- );

-- create table blogtags(
-- blogid int not null,
-- tagid int not null
-- );

-- alter table blogs
-- add foreign key (authorid) references authors(id);

-- alter table blogtags
-- add foreign key (blogid) references blogs(id);

-- alter table blogtags
-- add foreign key (tagid) references tags(id);

-- insert into authors (name, email) values
-- ("Linc", "Linc@stupidemail.com"),
-- ("Amanda", "amanda@stupidemail.com"),
-- ("Henry", "henry@stupidemail.com"), 
-- ("Sam", "sam@stupidemail.com"),
-- ("Holley", "holley@stupidemail.com"),
-- ("Amy", "amy@stupidemail.com"), 
-- ("Paul", "paul@stupidemail.com"),
-- ("Chelsea", "chelsea@stupidemail.com");

-- select * from authors;

-- insert into blogs (title, content, authorid) values
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 1),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 2),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 3),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 4),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 5),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 6),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 7),
-- ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus est, pharetra vel turpis a, hendrerit fermentum elit. Morbi at fringilla elit, eget sagittis urna. Donec in lorem suscipit, hendrerit dui eget, convallis ligula. Cras vel lobortis diam. Aliquam dolor lectus, ullamcorper ac vehicula a, vestibulum eu eros. In hac habitasse platea dictumst. Ut eget aliquam magna, sed feugiat ipsum. Integer ante nulla, tempus a sodales in, euismod et sem. Morbi cursus velit non metus molestie, blandit gravida dolor consectetur. Sed vel bibendum odio. Ut non sapien et nibh pulvinar fermentum. Donec gravida nec ante sit amet porta. Aliquam efficitur pretium mi, vitae luctus ex lacinia at.", 8);

-- select * from blogs;

-- select authors.name, blogs.content from authors
-- inner join blogs
-- on (authors.id = blogs.authorid)

-- delimiter //
-- create procedure spBlogTags
-- (blogid int)
-- BEGIN
-- 	select
-- 		tags.name,
--         blogtags.blogid
--     from tags
--     join blogtags on tags.id = blogtags.tagid
--     where blogtags.blogid = blogid;
-- END//
-- delimiter ;

-- delimiter //
-- create procedure spAllBlogTags    
-- ()
-- BEGIN
-- 	select
-- 		tags.name,
--         blogtags.blogid
--     from tags
--     join blogtags on tags.id = blogtags.tagid;
--  END//
--  delimiter ;

create user 'blogsapp'@'localhost'
identified by 'pwmade';

grant all privileges 
on blog.*
to'blogsapp'@'localhost';

