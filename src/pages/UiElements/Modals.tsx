import { useState } from "react";
import { Modal } from "antd";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const scrollableParagraphs = Array.from(
  { length: 8 },
  (_, index) =>
    `This is paragraph ${
      index + 1
    } of the scrollable modal body. It demonstrates how content behaves when it exceeds the available viewport height. You can place any long-form text, tables, or form controls inside without impacting the surrounding layout.`
);

export default function Modals() {
  const [smallOpen, setSmallOpen] = useState(false);
  const [mediumOpen, setMediumOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [scrollableOpen, setScrollableOpen] = useState(false);

  const showSuccessConfirm = () => {
    Modal.confirm({
      className: "ta-modal ta-modal--success",
      title: "Mark order as fulfilled?",
      content:
        "Once confirmed, the order status will change to fulfilled and a confirmation email is sent to the customer.",
      okText: "Confirm",
      cancelText: "Cancel",
      centered: true,
      icon: <CheckCircleOutlined className="ta-modal__icon" />,
    });
  };

  const showDangerConfirm = () => {
    Modal.confirm({
      className: "ta-modal ta-modal--danger",
      title: "Delete this record?",
      content:
        "Deleting a record permanently removes it from your database. This action cannot be undone.",
      okText: "Delete",
      cancelText: "Cancel",
      centered: true,
      icon: <CloseCircleOutlined className="ta-modal__icon" />,
    });
  };

  const showWarningConfirm = () => {
    Modal.confirm({
      className: "ta-modal ta-modal--warning",
      title: "Pause subscription?",
      content:
        "Customers will lose access immediately. You can re-activate the subscription at any time.",
      okText: "Pause",
      cancelText: "Cancel",
      centered: true,
      icon: <ExclamationCircleOutlined className="ta-modal__icon" />,
    });
  };

  const showInfoModal = () => {
    Modal.info({
      className: "ta-modal ta-modal--info",
      title: "Team onboarding tips",
      content:
        "Share quick wins, keep tasks bite-sized, and celebrate small milestones so your new teammates feel included from day one.",
      centered: true,
      icon: <InfoCircleOutlined className="ta-modal__icon" />,
      okText: "Got it",
    });
  };

  return (
    <div>
      <PageMeta
        title="React.js Modal Examples | TailAdmin - React.js Admin Dashboard Template"
        description="Collection of modal variations showcasing Ant Design modals integrated with TailAdmin React.js admin dashboard template."
      />
      <PageBreadcrumb pageTitle="Modals" />
      <div className="space-y-6">
        <ComponentCard
          title="Status & Confirmation Modals"
          desc="Trigger contextual confirmations for success, danger, warning, or informational flows."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={showSuccessConfirm}>Success confirm</Button>
            <Button
              className="bg-rose-500! hover:bg-rose-600! text-white!"
              onClick={showDangerConfirm}
            >
              Danger confirm
            </Button>
            <Button
              className="bg-amber-500! hover:bg-amber-600! text-white!"
              onClick={showWarningConfirm}
            >
              Warning confirm
            </Button>
            <Button variant="outline" onClick={showInfoModal}>
              Info modal
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Standard Modal Sizes"
          desc="Preview Ant Design modal widths across small, default, and large layouts."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" onClick={() => setSmallOpen(true)}>
              Open small modal
            </Button>
            <Button onClick={() => setMediumOpen(true)}>
              Open default modal
            </Button>
            <Button
              className="bg-gray-900! hover:bg-gray-800! text-white!"
              onClick={() => setLargeOpen(true)}
            >
              Open large modal
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Scrollable Content Modal"
          desc="Use a constrained body height so longer content scrolls within the modal instead of expanding the viewport."
        >
          <Button variant="outline" onClick={() => setScrollableOpen(true)}>
            Open scrollable modal
          </Button>
        </ComponentCard>
      </div>

      <Modal
        title="Invite teammate"
        open={smallOpen}
        width={360}
        onCancel={() => setSmallOpen(false)}
        onOk={() => setSmallOpen(false)}
        centered
        className="ta-modal"
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This compact modal is perfect for short confirmations or quick forms
          where space is limited.
        </p>
      </Modal>

      <Modal
        title="Review submission"
        open={mediumOpen}
        onCancel={() => setMediumOpen(false)}
        onOk={() => setMediumOpen(false)}
        centered
        className="ta-modal"
      >
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <p>
            This is the default modal width provided by Ant Design. It works
            well for most standard use cases, such as confirmation dialogs,
            quick forms, or short summaries.
          </p>
          <p>
            You can mix Tailwind utility classes inside the content area to
            align with the rest of the dashboard styles.
          </p>
        </div>
      </Modal>

      <Modal
        title="Q3 revenue breakdown"
        open={largeOpen}
        width={800}
        onCancel={() => setLargeOpen(false)}
        onOk={() => setLargeOpen(false)}
        centered
        className="ta-modal"
      >
        <div className="grid gap-4 text-sm text-gray-600 dark:text-gray-300 md:grid-cols-2">
          <div>
            <h4 className="mb-1 font-medium text-gray-800 dark:text-white/90">
              Highlights
            </h4>
            <ul className="space-y-2">
              <li>North America revenue up 24% quarter over quarter.</li>
              <li>Customer lifetime value increased by 12%.</li>
              <li>Support satisfaction maintained above 96%.</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-1 font-medium text-gray-800 dark:text-white/90">
              Next steps
            </h4>
            <ul className="space-y-2">
              <li>Expand pilot program to two additional regions.</li>
              <li>Launch cross-sell nurture campaign in week three.</li>
              <li>Schedule stakeholder sync to review updated targets.</li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal
        title="Quarterly recap"
        open={scrollableOpen}
        width={600}
        onCancel={() => setScrollableOpen(false)}
        onOk={() => setScrollableOpen(false)}
        centered
        className="ta-modal"
        bodyStyle={{
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          {scrollableParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Modal>
    </div>
  );
}
