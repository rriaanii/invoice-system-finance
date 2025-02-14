export const roles = [
    { value: '1', label: 'Super Admin' },
    { value: '2', label: 'Admin Finance' },
    { value: '3', label: 'Supplier' },
 // After this role please add new role from Value 10
];

export const getRoleName = (role: string): string => {
    const foundRole = roles.find(r => r.value === role);
    return foundRole ? foundRole.label : 'Unknown Role';
};

export const getRoleValue = (role: string): string | null => {
    const foundRole = roles.find(r => r.label === role);
    return foundRole ? foundRole.value : null;
};

export const getRolePath = (role: string): string => {
    const foundRole = roles.find(r => r.value === role);
    return foundRole ? foundRole.label.toLowerCase().replace(/ /g, '-') : 'unknown-role';
};