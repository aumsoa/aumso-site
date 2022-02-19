import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggle from './theme-toggle'
import {BsDiscord, BsTelegram, BsGithub} from "react-icons/bs"

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          fontFamily="Fira Code"
          fontSize="16px"
        >
          <LinkItem
            _target="_blank"
            href="https://discord.gg/Bd276KufhC"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <BsDiscord/>
            Discord
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://t.me/aumso"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <BsTelegram />
            Telegram
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/aumsoa/aumso-site"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <BsGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
            <ThemeToggle/>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="https://discord.gg/Bd276KufhC" passHref>
                  <MenuItem as={Link}><BsDiscord/>{" "}Discord</MenuItem>
                </NextLink>
                <NextLink href="https://t.me/aumso" passHref>
                  <MenuItem as={Link}><BsTelegram/>{" "}Telegram</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/aumsoa/aumso-site"
                >
                  <BsGithub/>
                  {" "}View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
