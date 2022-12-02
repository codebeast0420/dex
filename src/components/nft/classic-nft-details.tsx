import { StaticImageData } from 'next/image';
import ParamTab, { TabPanel } from '@/components/ui/param-tab';
import Image from '@/components/ui/image';
import FeaturedCard from '@/components/nft/featured-card';
import ListCard from '@/components/ui/list-card';
import AnchorLink from '@/components/ui/links/anchor-link';
import { ArrowLinkIcon } from '@/components/icons/arrow-link-icon';
import { nftData } from '@/data/static/single-nft';
import NftDropDown from '@/components/nft/nft-dropdown';
import Avatar from '@/components/ui/avatar';
import NftFooter from '@/components/nft/nft-footer';
import { NextSeo } from 'next-seo';

type Avatar = {
  id: string | number;
  name: string;
  slug: string;
  logo: StaticImageData;
};
type NftDetailsProps = {
  isAuction?: boolean;
  image: StaticImageData;
  name: string;
  description: string;
  minted_date: string;
  minted_slug: string;
  price: number;
  creator: Avatar;
  collection: Avatar;
  owner: Avatar;
  block_chains: Avatar[];
};

export default function ClassicNFTDetails({
  product,
}: {
  product: NftDetailsProps;
}) {
  const {
    isAuction,
    image,
    name,
    description,
    minted_date,
    minted_slug,
    price,
    creator,
    collection,
    owner,
    block_chains,
  } = product;

  return (
    <>
      <NextSeo
        title="Classic NFT Details Page"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="flex flex-grow">
        <div className="mx-auto flex w-full flex-grow flex-col transition-all xl:max-w-[1360px] 4xl:max-w-[1760px]">
          <div className="relative mb-8 flex flex-grow items-center justify-center md:mb-0 md:pb-7 ltr:md:left-0 rtl:md:right-0 rtl:md:pr-0 lg:fixed lg:mb-0 lg:h-[calc(100%-140px)] lg:w-[calc(100%-492px)] ltr:lg:pl-0 rtl:lg:pr-0 xl:w-[calc(100%-412px)] ltr:xl:pl-0 ltr:xl:pr-12 rtl:xl:pr-0 rtl:xl:pl-12 2xl:w-[calc(100%-404px)] 2xl:pt-0 ltr:2xl:pl-0 3xl:w-[calc(100%-460px)] ltr:4xl:pl-0 rtl:4xl:pr-0">
            <div className="flex h-full max-h-full w-full items-center justify-center lg:max-w-[436px] xl:max-w-[590px] 3xl:max-w-[768px]">
              <div className="relative aspect-square max-h-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={name}
                  className="h-full bg-gray-200 dark:bg-light-dark"
                />
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-grow flex-col justify-between ltr:md:ml-auto ltr:md:pl-0 rtl:md:mr-auto rtl:md:pr-0 lg:min-h-[calc(100vh-96px)] lg:w-[460px] ltr:lg:pl-12 rtl:lg:pr-12 xl:w-[510px] ltr:xl:pl-0 rtl:xl:pr-20">
            <div className="block">
              <div className="block">
                <div className="flex justify-between">
                  <h2 className="text-xl font-medium leading-[1.45em] -tracking-wider text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
                    {name}
                  </h2>
                  <div className="mt-1.5 shrink-0 ltr:ml-3 rtl:mr-3 xl:mt-2">
                    <NftDropDown />
                  </div>
                </div>
                <AnchorLink
                  href={minted_slug}
                  className="mt-1.5 inline-flex items-center text-sm -tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white xl:mt-2.5"
                >
                  Minted on {minted_date}
                  <ArrowLinkIcon className="h-3 w-3 ltr:ml-2 rtl:mr-2" />
                </AnchorLink>
                <div className="mt-4 flex flex-wrap gap-6 pt-0.5 lg:-mx-6 lg:mt-6 lg:gap-0">
                  <div className="shrink-0 border-dashed border-gray-200 dark:border-gray-700 lg:px-6 lg:ltr:border-r lg:rtl:border-l">
                    <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                      Created By
                    </h3>
                    <AnchorLink href={creator?.slug} className="inline-flex">
                      <ListCard
                        item={creator}
                        className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      />
                    </AnchorLink>
                  </div>
                  <div className="shrink-0 lg:px-6">
                    <h3 className="text-heading-style mb-2.5 uppercase text-gray-900 dark:text-white">
                      Collection
                    </h3>
                    <AnchorLink href="#" className="inline-flex">
                      <ListCard
                        item={collection}
                        className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      />
                    </AnchorLink>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-col pb-5 xl:mt-9">
                <ParamTab
                  tabMenu={[
                    {
                      title: 'Details',
                      path: 'details',
                    },
                    {
                      title: 'Bids',
                      path: 'bids',
                    },
                    {
                      title: 'History',
                      path: 'history',
                    },
                  ]}
                >
                  <TabPanel className="focus:outline-none">
                    <div className="space-y-6">
                      <div className="block">
                        <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                          Description
                        </h3>
                        <div className="text-sm leading-6 -tracking-wider text-gray-600 dark:text-gray-400">
                          {description}
                        </div>
                      </div>
                      <div className="block">
                        <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                          Owner
                        </h3>
                        <AnchorLink href={owner?.slug} className="inline-block">
                          <ListCard
                            item={owner}
                            className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          />
                        </AnchorLink>
                      </div>
                      <div className="block">
                        <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                          Block Chain
                        </h3>
                        <div className="flex flex-col gap-2">
                          {block_chains?.map((item: any) => (
                            <AnchorLink
                              href="#"
                              className="inline-flex"
                              key={item?.id}
                            >
                              <ListCard
                                item={item}
                                className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              />
                            </AnchorLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel className="focus:outline-none">
                    <div className="flex flex-col-reverse">
                      {nftData?.bids?.map((bid) => (
                        <FeaturedCard
                          item={bid}
                          key={bid?.id}
                          className="mb-3 first:mb-0"
                        />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel className="focus:outline-none">
                    <div className="flex flex-col-reverse">
                      {nftData?.history?.map((item) => (
                        <FeaturedCard
                          item={item}
                          key={item?.id}
                          className="mb-3 first:mb-0"
                        />
                      ))}
                    </div>
                  </TabPanel>
                </ParamTab>
              </div>
            </div>
            <NftFooter
              className="hidden md:block"
              currentBid={nftData?.bids[nftData?.bids?.length - 1]}
              auctionTime={Date.now() + 4000000 * 10}
              isAuction={isAuction}
              price={price}
            />
          </div>
          <NftFooter
            currentBid={nftData?.bids[nftData?.bids?.length - 1]}
            auctionTime={Date.now() + 4000000 * 10}
            isAuction={isAuction}
            price={price}
          />
        </div>
      </div>
    </>
  );
}
