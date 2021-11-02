
import actionsIcon from 'assets/actions-icon.png'
import inventoryIcon from 'assets/inventory-icon.png'
import materialsIcon from 'assets/materials-icon.png'

import {
  Wrapper,
  PageTitle,
  PageTitleSection,
  Content,
  HomePageItemsContainer,
  HomePageItem,
  HomePageItemIcon,
  HomePageItemTitle
} from './styles'
import Swal from 'sweetalert2'
import api from 'services/api'
import LoadingModal from 'components/LoadingModal'


const Home = () => {

  return <>
    <Wrapper>
      <PageTitleSection>
        <PageTitle>Almoxarifado</PageTitle>
      </PageTitleSection>
      <Content>
        <HomePageItemsContainer>
          <HomePageItem>
            <HomePageItemIcon src={actionsIcon} />
            <HomePageItemTitle>Movimentações</HomePageItemTitle>
          </HomePageItem>
          <HomePageItem>
            <HomePageItemIcon src={inventoryIcon} />
            <HomePageItemTitle>Inventário</HomePageItemTitle>
          </HomePageItem>
          <HomePageItem>
            <HomePageItemIcon src={materialsIcon} />
            <HomePageItemTitle>Gerenciar Materiais</HomePageItemTitle>
          </HomePageItem>
        </HomePageItemsContainer>
      </Content>
    </Wrapper>
  </>
}

export default Home