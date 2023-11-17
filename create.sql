drop table branas.todo;

create table branas.todo (
	id text,
	description text,
	done boolean
);

insert into branas.todo (id, description, done) values ('1', 'A', false);
insert into branas.todo (id, description, done) values ('2', 'B', false);
insert into branas.todo (id, description, done) values ('3', 'C', false);
