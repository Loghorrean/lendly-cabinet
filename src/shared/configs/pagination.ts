const DEFAULT_PER_PAGE = 10;
const DEFAULT_FIRST_PAGE = 1;

export const paginationConfig = {
    get defaultPerPage() {
        return DEFAULT_PER_PAGE;
    },
    get defaultFirstPage() {
        return DEFAULT_FIRST_PAGE;
    },
};
