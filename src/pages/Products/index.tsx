import { addProduct } from "actions/user";
import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { productState } from "reducers/types";
import { Button, Form, Grid, Header, Modal, Table } from "semantic-ui-react";
import { RootState } from "store/types";
import Swal from "sweetalert2";
import { Products } from "types/Products";
import { fakeProducts } from "utils/fake-data";
import "./styles.module.scss";

const initialProductState: Products = {
  product: "",
  department: "",
  price: "",
  availability: ""
};

type State = {
  product: Products;
  showModal: boolean;
};

type Props = {
  products: productState;
  addProduct: typeof addProduct;
} & RouteComponentProps;

class ProductsPage extends Component<Props, State> {
  state: State = {
    product: initialProductState,
    showModal: false
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  renderProducts = () => {
    return fakeProducts.map((products, idx) => (
      <Table.Row textAlign="center" key={idx}>
        <Table.Cell>{products.producto}</Table.Cell>
        <Table.Cell>{products.departamento}</Table.Cell>
        <Table.Cell>{products.precio}</Table.Cell>
        <Table.Cell>{products.disponibilidad}</Table.Cell>
      </Table.Row>
    ));
  };

  renderNewProducts = () => {
    const { tableProducts } = this.props.products;

    return tableProducts.map((product: any, idx: any) => (
      <Table.Row textAlign="center" key={idx}>
        <Table.Cell>{product.product}</Table.Cell>
        <Table.Cell>{product.department}</Table.Cell>
        <Table.Cell>${product.price}</Table.Cell>
        <Table.Cell>{product.availability}</Table.Cell>
      </Table.Row>
    ));
  };

  handleChange = (key: keyof Products, value: any) => {
    const tempProducts: Products = { ...this.state.product };
    tempProducts[key] = value;
    this.setState({ product: tempProducts });
  };

  saveProduct = () => {
    const { product } = this.state;
    this.props.addProduct(
      product.product,
      product.department,
      product.price,
      product.availability
    );
    Swal.fire(
      "Éxito",
      "El producto fue registrado exitosamente en redux!.",
      "success"
    ).then(() => {
      this.toggleModal();
    });
  };

  render() {
    const { showModal } = this.state;
    const { product, department, price, availability } = this.state.product;
    return (
      <div>
        <Grid className="subheader" columns="equal">
          <Grid.Row className="headerrow">
            <Grid.Column floated="left">
              <Header as="h2" textAlign="center">
                Productos
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="page-content">
          <Button color="instagram" onClick={() => this.toggleModal()}>
            Añadir productos
          </Button>
          <Table unstackable>
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell>Producto</Table.HeaderCell>
                <Table.HeaderCell>Departamento</Table.HeaderCell>
                <Table.HeaderCell>Precio</Table.HeaderCell>
                <Table.HeaderCell>Disponibilidad</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row textAlign="center" key={1}>
                <Table.Cell>Xbox ONE</Table.Cell>
                <Table.Cell>Electrónica</Table.Cell>
                <Table.Cell>$8475</Table.Cell>
                <Table.Cell>Disponible</Table.Cell>
              </Table.Row>
              {this.renderProducts()}
              {this.renderNewProducts()}
            </Table.Body>
          </Table>
          <Modal
            closeIcon
            size="tiny"
            open={showModal}
            closeOnEscape={true}
            closeOnDimmerClick={false}
            onClose={this.toggleModal}
            centered={false}
          >
            <Modal.Header>Añadir nuevo producto</Modal.Header>
            <Modal.Content>
              <Form>
                <Header>Nombre</Header>
                <Form.Input
                  fluid
                  name="product"
                  value={product}
                  placeholder="Escribe el nombre del producto"
                  type="text"
                  onChange={(_, data) => {
                    this.handleChange("product", data.value as string);
                  }}
                />
                <Header>Departamento</Header>
                <Form.Input
                  fluid
                  name="department"
                  value={department}
                  placeholder="¿A qué departamento pertenece?"
                  type="text"
                  onChange={(_, data) => {
                    this.handleChange("department", data.value as string);
                  }}
                />
                <Header>Precio</Header>
                <Form.Input
                  fluid
                  name="price"
                  value={price}
                  placeholder="Ingresa el precio del producto"
                  type="text"
                  onChange={(_, data) => {
                    this.handleChange("price", data.value as string);
                  }}
                />
                <Header>Disponibilidad</Header>
                <Form.Input
                  fluid
                  name="availability"
                  value={availability}
                  placeholder="¿El producto está disponible?"
                  type="text"
                  onChange={(_, data) => {
                    this.handleChange("availability", data.value as string);
                  }}
                />
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button
                color="google plus"
                onClick={() => {
                  this.saveProduct();
                }}
              >
                Guardar
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: RootState) => ({
  products: store.products
});

const mapDispatchToProps = {
  addProduct
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsPage)
);
