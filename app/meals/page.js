import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import getMeals from "@/lib/meals"
import { Suspense } from "react";

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export const metadata = {
    title: 'All Meals',
    description: 'Browse meals shared by our vibrant users',
  };

export default function MealsPage(){
    return(
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite  dishes and create new ones. Share them with friends!.
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your creations!
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}