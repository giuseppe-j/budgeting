import {
    HomeIcon,
    ShoppingBagIcon,
    TruckIcon,
    HeartIcon,
    TrendingUpIcon,
    CurrencyEuroIcon,
} from "@heroicons/react/solid";
import {
    UTILITIES,
    SHOPPING,
    TRANSPORTATION,
    WELLNESS,
    INVESTING,
    SALARY,
} from "../shared/constants";

export const getIcon = (category: string) => {
    if (category === UTILITIES) {
        return <HomeIcon className="h-5 w-5 text-blue-500" />;
    } else if (category === SHOPPING) {
        return <ShoppingBagIcon className="h-5 w-5 text-yellow-500" />;
    } else if (category === TRANSPORTATION) {
        return <TruckIcon className="h-5 w-5 text-violet-500" />;
    } else if (category === WELLNESS) {
        return <HeartIcon className="h-5 w-5 text-red-500" />;
    } else if (category === INVESTING) {
        return <TrendingUpIcon className="h-5 w-5 text-orange-500" />;
    } else if (category === SALARY) {
        return <CurrencyEuroIcon className="h-5 w-5 text-teal-500" />;
    }
};
