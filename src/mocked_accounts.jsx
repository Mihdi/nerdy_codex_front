/*
	0(MSB): read_unpublished,
	1: write_published, 
	2: write_unpublished, 
	3: delete_any, 
	4: delete_own,
	5: modify_any,
	6(LSB): modify_own,
*/ 
const OWNER_PERMS = 0x7F;
const VALIDATED_EDITOR_PERMS = 0x75; 
const NONVALIDATED_EDITOR_PERMS = 0x15;
const UNKNOWN_VISITOR_PERMS = 0;

const owner = {
	name: "Arcanite",
	email: "arcanite",
	password: "foo",
	permission_bits: OWNER_PERMS,
	avatar_img: "old_lena.png",
};

const validated_editor = {
	name: "Crow",
	email: "crow",
	password: "foo",
	permission_bits: VALIDATED_EDITOR_PERMS,
	avatar_img: "lena.png",
};

const nonvalidated_editor = {
	name: "Alice",
	email: "jack",
	password: "foo",
	permission_bits: NONVALIDATED_EDITOR_PERMS,
	avatar_img: "logo192.png",
};

const unknown_visitor = {
	name: "John Doe",
	email: "john",
	password: "foo",
	permission_bits: UNKNOWN_VISITOR_PERMS,
	avatar_img: "icon5.png",
};

const mocked_accounts = [owner, validated_editor, nonvalidated_editor, unknown_visitor];

export default mocked_accounts;