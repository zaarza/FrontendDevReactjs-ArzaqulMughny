export type TRestaurantsData = {
    location_id: 'string';
    name: string;
    location_string: string;
    photo: {
        images: {
            medium: {
                width: string;
                url: string;
                height: string;
            };
        };
    };
    rating: string;
    is_closed: boolean;
    price_level: string;
    cuisine?: Array<{
        key: string;
        name: string;
    }>;
};

export type TRestaurantsResponse = {
    data: TRestaurantsData[];
    paging: {
        results: string;
        total_results: string;
    };
    filters: {
        restaurant_tagcategory: {
            [key: string]: {
                label: string;
            };
        };
    };
};
