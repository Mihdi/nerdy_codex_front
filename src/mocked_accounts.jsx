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
	email: "arcanite",
	password: "foo",
	permission_bits: OWNER_PERMS,
};

const validated_editor = {
	email: "crow",
	password: "foo",
	permission_bits: VALIDATED_EDITOR_PERMS,
};

const nonvalidated_editor = {
	email: "jack",
	password: "foo",
	permission_bits: NONVALIDATED_EDITOR_PERMS,
};

const unknown_visitor = {
	email: "john",
	password: "foo",
	permission_bits: UNKNOWN_VISITOR_PERMS,
};


export default [owner, validated_editor, nonvalidated_editor, unknown_visitor];