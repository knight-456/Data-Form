import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const HomePage = () => {

    return (
        <div className={"w-screen h-screen flex items-center justify-center"}>
            <Card className={"min-w-xl max-w-2xl flex flex-col items-center justify-center gap-5"}>
                <CardHeader className={"text-lg"}>
                    {"Hi, Welcome to DKC Exports"}
                </CardHeader>

                <CardContent>
                    <Button>
                        <Link href={"/dashboard"}>
                            {"Go To Dashboard"}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomePage;