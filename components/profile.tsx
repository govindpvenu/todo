'use client';

import { useId } from 'react';
import { AtSignIcon, ImagePlusIcon, XIcon } from 'lucide-react';

import { useCharacterLimit } from '@/hooks/use-character-limit';
import { useFileUpload } from '@/hooks/use-file-upload';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CurrentUserAvatar } from './current-user-avatar';
import Image from 'next/image';
import { useCurrentUserImage } from '@/hooks/use-current-user-image';

// Pretend we have initial image files
const initialBgImage = [
    {
        name: '',
        size: 1528737,
        type: '',
        url: '',
        id: '',
    },
];

export default function Profile() {
    const id = useId();

    const maxLength = 180;
    const {
        value,
        characterCount,
        handleChange,
        maxLength: limit,
    } = useCharacterLimit({
        maxLength,
        initialValue:
            'Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!',
    });

    return (
        <Dialog>
            <DialogTrigger className="bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex size-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border text-lg font-medium whitespace-nowrap shadow-xs transition-all duration-500 outline-none hover:scale-105 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <CurrentUserAvatar />
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
                <DialogHeader className="contents space-y-0 text-left">
                    <DialogTitle className="border-b px-6 py-4 text-base">
                        Edit profile
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className="sr-only">
                    Make changes to your profile here. You can change your photo
                    and set a username.
                </DialogDescription>
                <div className="overflow-y-auto">
                    <ProfileBg />
                    <Avatar />
                    <div className="px-6 pt-4 pb-6">
                        <form className="space-y-4">
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <div className="flex-1 space-y-2">
                                    <Label htmlFor={`${id}-first-name`}>
                                        First name
                                    </Label>
                                    <Input
                                        id={`${id}-first-name`}
                                        placeholder="Matt"
                                        defaultValue="Margaret"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <Label htmlFor={`${id}-last-name`}>
                                        Last name
                                    </Label>
                                    <Input
                                        id={`${id}-last-name`}
                                        placeholder="Welsh"
                                        defaultValue="Villard"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="*:not-first:mt-2">
                                <Label htmlFor={id}>
                                    Input with start icon
                                </Label>
                                <div className="relative">
                                    <Input
                                        disabled
                                        id={id}
                                        value={'govindpvenu.txt@gmail.com'}
                                        className="peer ps-9"
                                        placeholder="Email"
                                        type="email"
                                    />
                                    <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                                        <AtSignIcon
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="*:not-first:mt-2">
                                <Label htmlFor={`${id}-bio`}>Biography</Label>
                                <Textarea
                                    id={`${id}-bio`}
                                    placeholder="Write a few sentences about yourself"
                                    defaultValue={value}
                                    maxLength={maxLength}
                                    onChange={handleChange}
                                    aria-describedby={`${id}-description`}
                                />
                                <p
                                    id={`${id}-description`}
                                    className="text-muted-foreground mt-2 text-right text-xs"
                                    role="status"
                                    aria-live="polite"
                                >
                                    <span className="tabular-nums">
                                        {limit - characterCount}
                                    </span>{' '}
                                    characters left
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <DialogFooter className="border-t px-6 py-4">
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button">Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function ProfileBg() {
    const [{ files }, { removeFile, openFileDialog, getInputProps }] =
        useFileUpload({
            accept: 'image/*',
            initialFiles: initialBgImage,
        });

    const currentImage = files[0]?.preview || null;

    return (
        <div className="h-32">
            <div className="bg-muted relative flex size-full items-center justify-center overflow-hidden">
                {currentImage && (
                    <Image
                        className="size-full object-cover"
                        src={currentImage}
                        alt={
                            files[0]?.preview
                                ? 'Preview of uploaded image'
                                : 'Default profile background'
                        }
                        width={512}
                        height={96}
                    />
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <button
                        type="button"
                        className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                        onClick={openFileDialog}
                        aria-label={
                            currentImage ? 'Change image' : 'Upload image'
                        }
                    >
                        <ImagePlusIcon size={16} aria-hidden="true" />
                    </button>
                    {currentImage && (
                        <button
                            type="button"
                            className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                            onClick={() => removeFile(files[0]?.id)}
                            aria-label="Remove image"
                        >
                            <XIcon size={16} aria-hidden="true" />
                        </button>
                    )}
                </div>
            </div>
            <input
                {...getInputProps()}
                className="sr-only"
                aria-label="Upload image file"
            />
        </div>
    );
}

function Avatar() {
    const profileImage = useCurrentUserImage();

    const initialAvatarImage = [
        {
            name: 'dummy-profile.png',
            size: 1528737,
            type: 'image/jpeg',
            url:
                profileImage ??
                'https://avatars.githubusercontent.com/u/100788322?v=4',
            id: 'template',
        },
    ];

    const [{ files }, { openFileDialog, getInputProps }] = useFileUpload({
        accept: 'image/*',
        initialFiles: initialAvatarImage,
    });

    const currentImage = files[0]?.preview || null;

    return (
        <div className="-mt-10 px-6">
            <div className="border-background bg-muted relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 shadow-xs shadow-black/10">
                {currentImage && (
                    <Image
                        src={currentImage}
                        className="size-full object-cover"
                        width={80}
                        height={80}
                        alt=""
                    />
                )}
                <button
                    type="button"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                    onClick={openFileDialog}
                    aria-label="Change profile picture"
                >
                    <ImagePlusIcon size={16} aria-hidden="true" />
                </button>
                <input
                    {...getInputProps()}
                    className="sr-only"
                    aria-label="Upload profile picture"
                />
            </div>
        </div>
    );
}
